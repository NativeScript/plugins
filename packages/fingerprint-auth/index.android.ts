import { Application, AndroidActivityResultEventData, Utils, AndroidApplication } from "@nativescript/core";
import { BiometricIDAvailableResult, ERROR_CODES, FingerprintAuthApi, VerifyFingerprintOptions, VerifyFingerprintWithCustomFallbackOptions } from "./common";

declare const com: any;

const KEY_NAME = "fingerprintauth";
const SECRET_BYTE_ARRAY = Array.create("byte", 16);
const REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS = 788; // arbitrary

export class FingerprintAuth implements FingerprintAuthApi {
  private keyguardManager: android.app.KeyguardManager;
  private fingerPrintManager: any;

  constructor() {
    this.keyguardManager = Utils.android
        .getApplicationContext()
        .getSystemService("keyguard");
  }

  // TODO can we detect face on the Samsung S8?
  available(): Promise<BiometricIDAvailableResult> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.keyguardManager || !this.keyguardManager.isKeyguardSecure()) {
          resolve({
            any: false
          });
          return;
        }

        // The fingerprint API is only available from Android 6.0 (M, Api level 23)
        if (android.os.Build.VERSION.SDK_INT < 23) {
          reject(`Your api version doesn't support fingerprint authentication`);
          return;
        }

        const fingerprintManager = Utils.android
            .getApplicationContext()
            .getSystemService(
                "fingerprint"
            ) as android.hardware.fingerprint.FingerprintManager;

        if (!fingerprintManager || !fingerprintManager.isHardwareDetected()) {
          // Device doesn't support fingerprint authentication
          reject(`Device doesn't support fingerprint authentication`);
        } else if (!fingerprintManager.hasEnrolledFingerprints()) {
          // If the user has not enrolled any fingerprints, they still might have the device secure so we can fallback
          // to present the user with the swipe, password, pin device security screen regardless
          // the developer can handle this resolve by checking the `touch` property and determine if they want to use the
          // verifyFingerprint method or not since they'll know the user has no finger prints enrolled but do have a security option enabled
          // https://developer.android.com/reference/android/app/KeyguardManager.html#isDeviceSecure() only 23+
          if (this.keyguardManager.isDeviceSecure()) {
            resolve({
              any: true,
              touch: false
            });
          } else {
            // User hasn't enrolled any fingerprints to authenticate with
            reject(
                `User hasn't enrolled any fingerprints to authenticate with`
            );
          }
        } else {
          resolve({
            any: true,
            touch: true
          });
        }
      } catch (ex) {
        console.log(`fingerprint-auth.available: ${ex}`);
        reject(ex);
      }
    });
  }

  didFingerprintDatabaseChange(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // not implemented for Android
      // TODO should be possible..
      resolve(false);
    });
  }

  private verifyWithCustomAndroidUI(resolve, reject, authenticationCallback) {
    // this instance is com.jesusm.kfingerprintmanager.KFingerprintManager, not the android OS fingerprint manager
    this.fingerPrintManager.authenticate(
        authenticationCallback,
        this.getActivity().getSupportFragmentManager()
    );
  }

  verifyFingerprint(options: VerifyFingerprintOptions): Promise<void | string> {
    return new Promise((resolve, reject) => {
      try {
        // in case 'activity.getSupportFragmentManager' is available ({N} started supporting it,
        // or the user added our Activity to their Android manifest), use the 3rd party FP library
        const hasSupportFragment =
            this.getActivity().getSupportFragmentManager !== undefined;

        if (options.useCustomAndroidUI && !hasSupportFragment) {
          reject({
            code: ERROR_CODES.DEVELOPER_ERROR,
            message:
                "Custom Fingerprint UI requires changes to AndroidManifest.xml. See the nativescript-fingerprint-auth documentation."
          });
        } else if (options.useCustomAndroidUI && hasSupportFragment) {
          if (!this.fingerPrintManager) {
            this.fingerPrintManager = new com.jesusm.kfingerprintmanager.KFingerprintManager(
              Utils.android.getApplicationContext(),
                KEY_NAME
            );
          }
          const that = this;
          const callback = new com.jesusm.kfingerprintmanager.KFingerprintManager.AuthenticationCallback(
              {
                attempts: 0,
                onAuthenticationFailedWithHelp(help): void {
                  if (++this.attempts < 3) {
                    // just invoke the UI again as it's very sensitive (need a timeout to prevent an infinite loop)
                    setTimeout(
                        () => that.verifyWithCustomAndroidUI(resolve, reject, this),
                        50
                    );
                  } else {
                    reject({
                      code: ERROR_CODES.RECOVERABLE_ERROR,
                      message: help
                    });
                  }
                },
                onAuthenticationSuccess(): void {
                  resolve();
                },
                onSuccessWithManualPassword(password): void {
                  resolve(password);
                },
                onFingerprintNotRecognized(): void {
                  if (++this.attempts < 3) {
                    // just invoke the UI again as it's very sensitive (need a timeout to prevent an infinite loop)
                    setTimeout(
                        () => that.verifyWithCustomAndroidUI(resolve, reject, this),
                        50
                    );
                  } else {
                    reject({
                      code: ERROR_CODES.NOT_RECOGNIZED,
                      message: "Fingerprint not recognized."
                    });
                  }
                },
                onFingerprintNotAvailable(): void {
                  reject({
                    code: ERROR_CODES.NOT_CONFIGURED,
                    message:
                        'Secure lock screen hasn\'t been set up.\n Go to "Settings -> Security -> Screenlock" to set up a lock screen.'
                  });
                },
                onCancelled(): void {
                  reject({
                    code: ERROR_CODES.PASSWORD_FALLBACK_SELECTED,
                    message: "Cancelled by user"
                  });
                }
              }
          );
          this.verifyWithCustomAndroidUI(resolve, reject, callback);
        } else {
          const onActivityResult = (data: AndroidActivityResultEventData) => {
            if (data.requestCode === REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS) {
              if (data.resultCode === android.app.Activity.RESULT_OK) {
                // OK = -1
                // the user has just authenticated via the ConfirmDeviceCredential activity
                resolve();
              } else {
                // the user has quit the activity without providing credentials
                reject({
                  code: ERROR_CODES.USER_CANCELLED,
                  message: "User cancelled."
                });
              }
            }
            Application.android.off(
                AndroidApplication.activityResultEvent,
                onActivityResult
            );
          };

          Application.android.on(
              AndroidApplication.activityResultEvent,
              onActivityResult
          );

          if (!this.keyguardManager) {
            reject({
              code: ERROR_CODES.NOT_AVAILABLE,
              message: "Keyguard manager not available."
            });
          }
          if (
              this.keyguardManager &&
              !this.keyguardManager.isKeyguardSecure()
          ) {
            reject({
              code: ERROR_CODES.NOT_CONFIGURED,
              message:
                  'Secure lock screen hasn\'t been set up.\n Go to "Settings -> Security -> Screenlock" to set up a lock screen.'
            });
          }

          FingerprintAuth.createKey(options);

          const tryEncryptResult: boolean = this.tryEncrypt(options);
          if (tryEncryptResult === undefined) {
            // this one is async
          } else if (tryEncryptResult === true) {
            resolve();
          } else {
            reject({
              code: ERROR_CODES.UNEXPECTED_ERROR,
              message: "See the console for error logs."
            });
          }
        }
      } catch (ex) {
        console.log(`Error in fingerprint-auth.verifyFingerprint: ${ex}`);
        reject({
          code: ERROR_CODES.UNEXPECTED_ERROR,
          message: ex
        });
      }
    });
  }

  verifyFingerprintWithCustomFallback(
      options: VerifyFingerprintWithCustomFallbackOptions
  ): Promise<any> {
    return this.verifyFingerprint(options);
  }

  close(): void {
    const fragmentManager = this.getActivity().getSupportFragmentManager();
    // this is for custom ui
    const fragmentTag = "KFingerprintManager:fingerprintDialog";
    const fragment = fragmentManager.findFragmentByTag(fragmentTag);
    if (fragment) {
      fragmentManager.beginTransaction().remove(fragment).commit();
    } else {
      // AFAIK it's not possible to programmatically close the standard one
    }
  }

  /**
   * Creates a symmetric key in the Android Key Store which can only be used after the user has
   * authenticated with device credentials within the last X seconds.
   */
  private static createKey(options): void {
    try {
      const keyStore = java.security.KeyStore.getInstance("AndroidKeyStore");
      keyStore.load(null);
      const keyGenerator = javax.crypto.KeyGenerator.getInstance(
          android.security.keystore.KeyProperties.KEY_ALGORITHM_AES,
          "AndroidKeyStore"
      );

      keyGenerator.init(
          new android.security.keystore.KeyGenParameterSpec.Builder(
              KEY_NAME,
              android.security.keystore.KeyProperties.PURPOSE_ENCRYPT |
              android.security.keystore.KeyProperties.PURPOSE_DECRYPT
          )
              .setBlockModes([
                android.security.keystore.KeyProperties.BLOCK_MODE_CBC
              ])
              .setUserAuthenticationRequired(true)
              .setUserAuthenticationValidityDurationSeconds(
                  options && options.authenticationValidityDuration
                      ? options.authenticationValidityDuration
                      : 5
              )
              .setEncryptionPaddings([
                android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7
              ])
              .build()
      );
      keyGenerator.generateKey();
    } catch (error) {
      // checks if the AES algorithm is implemented by the AndroidKeyStore
      if (
          `${error.nativeException}`.indexOf(
              "java.security.NoSuchAlgorithmException:"
          ) > -1
      ) {
        // You need a device with API level >= 23 in order to detect if the user has already been authenticated in the last x seconds.
      }
    }
  }

  private tryEncrypt(options): boolean {
    try {
      const keyStore = java.security.KeyStore.getInstance("AndroidKeyStore");
      keyStore.load(null);
      const secretKey = keyStore.getKey(KEY_NAME, null);

      const cipher = javax.crypto.Cipher.getInstance(
          `${android.security.keystore.KeyProperties.KEY_ALGORITHM_AES}/${
              android.security.keystore.KeyProperties.BLOCK_MODE_CBC
          }/${android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7}`
      );

      cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, secretKey);
      cipher.doFinal(SECRET_BYTE_ARRAY);

      return true;
    } catch (error) {
      if (
          `${error.nativeException}`.indexOf(
              "android.security.keystore.UserNotAuthenticatedException"
          ) > -1
      ) {
        // the user must provide their credentials in order to proceed
        this.showAuthenticationScreen(options);
        return undefined;
      } else if (
          `${error.nativeException}`.indexOf(
              "android.security.keystore.KeyPermanentlyInvalidatedException"
          ) > -1
      ) {
        // Invalid fingerprint
        console.log(error);
      } else {
        console.log(error);
      }
      return false;
    }
  }

  /**
   * Starts the built-in Android ConfirmDeviceCredential activity.
   */
  private showAuthenticationScreen(options): void {
    // https://developer.android.com/reference/android/app/KeyguardManager#createConfirmDeviceCredentialIntent(java.lang.CharSequence,%2520java.lang.CharSequence)
    const intent = (this
        .keyguardManager as any).createConfirmDeviceCredentialIntent(
        options && options.title ? options.title : null,
        options && options.message ? options.message : null
    );
    if (intent !== null) {
      this.getActivity().startActivityForResult(
          intent,
          REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS
      );
    }
  }

  private getActivity(): any /* android.app.Activity */ {
    return Application.android.foregroundActivity || Application.android.startActivity;
  }
}
