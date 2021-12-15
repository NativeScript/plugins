/// <reference path="android-declarations.d.ts"/>

declare module androidx {
	export module biometric {
		export class AuthenticationCallbackProvider {
			public static class: java.lang.Class<androidx.biometric.AuthenticationCallbackProvider>;
		}
		export module AuthenticationCallbackProvider {
			export class Api28Impl {
				public static class: java.lang.Class<androidx.biometric.AuthenticationCallbackProvider.Api28Impl>;
			}
			export class Api30Impl {
				public static class: java.lang.Class<androidx.biometric.AuthenticationCallbackProvider.Api30Impl>;
			}
			export class Listener {
				public static class: java.lang.Class<androidx.biometric.AuthenticationCallbackProvider.Listener>;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class AuthenticatorUtils {
			public static class: java.lang.Class<androidx.biometric.AuthenticatorUtils>;
		}
	}
}

declare module androidx {
	export module biometric {
		export class BiometricErrorData {
			public static class: java.lang.Class<androidx.biometric.BiometricErrorData>;
			public equals(param0: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module biometric {
		export class BiometricFragment {
			public static class: java.lang.Class<androidx.biometric.BiometricFragment>;
			public onStart(): void;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			public constructor();
			public onStop(): void;
		}
		export module BiometricFragment {
			export class Api21Impl {
				public static class: java.lang.Class<androidx.biometric.BiometricFragment.Api21Impl>;
			}
			export class Api28Impl {
				public static class: java.lang.Class<androidx.biometric.BiometricFragment.Api28Impl>;
			}
			export class Api29Impl {
				public static class: java.lang.Class<androidx.biometric.BiometricFragment.Api29Impl>;
			}
			export class Api30Impl {
				public static class: java.lang.Class<androidx.biometric.BiometricFragment.Api30Impl>;
			}
			export class PromptExecutor {
				public static class: java.lang.Class<androidx.biometric.BiometricFragment.PromptExecutor>;
				public execute(param0: java.lang.Runnable): void;
			}
			export class ShowPromptForAuthenticationRunnable {
				public static class: java.lang.Class<androidx.biometric.BiometricFragment.ShowPromptForAuthenticationRunnable>;
				public run(): void;
			}
			export class StopDelayingPromptRunnable {
				public static class: java.lang.Class<androidx.biometric.BiometricFragment.StopDelayingPromptRunnable>;
				public run(): void;
			}
			export class StopIgnoringCancelRunnable {
				public static class: java.lang.Class<androidx.biometric.BiometricFragment.StopIgnoringCancelRunnable>;
				public run(): void;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class BiometricManager {
			public static class: java.lang.Class<androidx.biometric.BiometricManager>;
			public static BIOMETRIC_SUCCESS: number;
			public static BIOMETRIC_STATUS_UNKNOWN: number;
			public static BIOMETRIC_ERROR_UNSUPPORTED: number;
			public static BIOMETRIC_ERROR_HW_UNAVAILABLE: number;
			public static BIOMETRIC_ERROR_NONE_ENROLLED: number;
			public static BIOMETRIC_ERROR_NO_HARDWARE: number;
			public static BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED: number;
			public canAuthenticate(param0: number): number;
			public static from(param0: globalAndroid.content.Context): androidx.biometric.BiometricManager;
			/** @deprecated */
			public canAuthenticate(): number;
		}
		export module BiometricManager {
			export class Api29Impl {
				public static class: java.lang.Class<androidx.biometric.BiometricManager.Api29Impl>;
			}
			export class Api30Impl {
				public static class: java.lang.Class<androidx.biometric.BiometricManager.Api30Impl>;
			}
			export class Authenticators {
				public static class: java.lang.Class<androidx.biometric.BiometricManager.Authenticators>;
				/**
				 * Constructs a new instance of the androidx.biometric.BiometricManager$Authenticators interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {});
				public constructor();
				public static BIOMETRIC_WEAK: number;
				public static BIOMETRIC_STRONG: number;
				public static DEVICE_CREDENTIAL: number;
			}
			export class DefaultInjector extends androidx.biometric.BiometricManager.Injector {
				public static class: java.lang.Class<androidx.biometric.BiometricManager.DefaultInjector>;
				public getFingerprintManager(): androidx.core.hardware.fingerprint.FingerprintManagerCompat;
				public isDeviceSecurable(): boolean;
				public getBiometricManager(): globalAndroid.hardware.biometrics.BiometricManager;
				public isFingerprintHardwarePresent(): boolean;
				public isStrongBiometricGuaranteed(): boolean;
				public isDeviceSecuredWithCredential(): boolean;
			}
			export class Injector {
				public static class: java.lang.Class<androidx.biometric.BiometricManager.Injector>;
				/**
				 * Constructs a new instance of the androidx.biometric.BiometricManager$Injector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { getBiometricManager(): globalAndroid.hardware.biometrics.BiometricManager; getFingerprintManager(): androidx.core.hardware.fingerprint.FingerprintManagerCompat; isDeviceSecurable(): boolean; isDeviceSecuredWithCredential(): boolean; isFingerprintHardwarePresent(): boolean; isStrongBiometricGuaranteed(): boolean });
				public constructor();
				public getFingerprintManager(): androidx.core.hardware.fingerprint.FingerprintManagerCompat;
				public isDeviceSecurable(): boolean;
				public getBiometricManager(): globalAndroid.hardware.biometrics.BiometricManager;
				public isFingerprintHardwarePresent(): boolean;
				public isStrongBiometricGuaranteed(): boolean;
				public isDeviceSecuredWithCredential(): boolean;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class BiometricPrompt {
			public static class: java.lang.Class<androidx.biometric.BiometricPrompt>;
			public static ERROR_HW_UNAVAILABLE: number;
			public static ERROR_UNABLE_TO_PROCESS: number;
			public static ERROR_TIMEOUT: number;
			public static ERROR_NO_SPACE: number;
			public static ERROR_CANCELED: number;
			public static ERROR_LOCKOUT: number;
			public static ERROR_VENDOR: number;
			public static ERROR_LOCKOUT_PERMANENT: number;
			public static ERROR_USER_CANCELED: number;
			public static ERROR_NO_BIOMETRICS: number;
			public static ERROR_HW_NOT_PRESENT: number;
			public static ERROR_NEGATIVE_BUTTON: number;
			public static ERROR_NO_DEVICE_CREDENTIAL: number;
			public static ERROR_SECURITY_UPDATE_REQUIRED: number;
			public static AUTHENTICATION_RESULT_TYPE_UNKNOWN: number;
			public static AUTHENTICATION_RESULT_TYPE_DEVICE_CREDENTIAL: number;
			public static AUTHENTICATION_RESULT_TYPE_BIOMETRIC: number;
			public authenticate(param0: androidx.biometric.BiometricPrompt.PromptInfo, param1: androidx.biometric.BiometricPrompt.CryptoObject): void;
			public constructor(param0: androidx.fragment.app.Fragment, param1: androidx.biometric.BiometricPrompt.AuthenticationCallback);
			public constructor(param0: androidx.fragment.app.Fragment, param1: java.util.concurrent.Executor, param2: androidx.biometric.BiometricPrompt.AuthenticationCallback);
			public authenticate(param0: androidx.biometric.BiometricPrompt.PromptInfo): void;
			public constructor(param0: androidx.fragment.app.FragmentActivity, param1: java.util.concurrent.Executor, param2: androidx.biometric.BiometricPrompt.AuthenticationCallback);
			public cancelAuthentication(): void;
			public constructor(param0: androidx.fragment.app.FragmentActivity, param1: androidx.biometric.BiometricPrompt.AuthenticationCallback);
		}
		export module BiometricPrompt {
			export abstract class AuthenticationCallback {
				public static class: java.lang.Class<androidx.biometric.BiometricPrompt.AuthenticationCallback>;
				public onAuthenticationFailed(): void;
				public onAuthenticationError(param0: number, param1: string): void;
				public onAuthenticationSucceeded(param0: androidx.biometric.BiometricPrompt.AuthenticationResult): void;
				public constructor();
			}
			export class AuthenticationResult {
				public static class: java.lang.Class<androidx.biometric.BiometricPrompt.AuthenticationResult>;
				public getAuthenticationType(): number;
				public getCryptoObject(): androidx.biometric.BiometricPrompt.CryptoObject;
			}
			export class CryptoObject {
				public static class: java.lang.Class<androidx.biometric.BiometricPrompt.CryptoObject>;
				public constructor(param0: java.security.Signature);
				public constructor(param0: globalAndroid.security.identity.IdentityCredential);
				public getSignature(): java.security.Signature;
				public getIdentityCredential(): globalAndroid.security.identity.IdentityCredential;
				public getMac(): javax.crypto.Mac;
				public constructor(param0: javax.crypto.Cipher);
				public getCipher(): javax.crypto.Cipher;
				public constructor(param0: javax.crypto.Mac);
			}
			export class PromptInfo {
				public static class: java.lang.Class<androidx.biometric.BiometricPrompt.PromptInfo>;
				public getNegativeButtonText(): string;
				public getAllowedAuthenticators(): number;
				public isConfirmationRequired(): boolean;
				public getSubtitle(): string;
				public getDescription(): string;
				/** @deprecated */
				public isDeviceCredentialAllowed(): boolean;
				public getTitle(): string;
			}
			export module PromptInfo {
				export class Builder {
					public static class: java.lang.Class<androidx.biometric.BiometricPrompt.PromptInfo.Builder>;
					public setSubtitle(param0: string): androidx.biometric.BiometricPrompt.PromptInfo.Builder;
					public constructor();
					public setDescription(param0: string): androidx.biometric.BiometricPrompt.PromptInfo.Builder;
					/** @deprecated */
					public setDeviceCredentialAllowed(param0: boolean): androidx.biometric.BiometricPrompt.PromptInfo.Builder;
					public build(): androidx.biometric.BiometricPrompt.PromptInfo;
					public setTitle(param0: string): androidx.biometric.BiometricPrompt.PromptInfo.Builder;
					public setNegativeButtonText(param0: string): androidx.biometric.BiometricPrompt.PromptInfo.Builder;
					public setConfirmationRequired(param0: boolean): androidx.biometric.BiometricPrompt.PromptInfo.Builder;
					public setAllowedAuthenticators(param0: number): androidx.biometric.BiometricPrompt.PromptInfo.Builder;
				}
			}
			export class ResetCallbackObserver {
				public static class: java.lang.Class<androidx.biometric.BiometricPrompt.ResetCallbackObserver>;
				public resetCallback(): void;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class BiometricViewModel {
			public static class: java.lang.Class<androidx.biometric.BiometricViewModel>;
			public constructor();
		}
		export module BiometricViewModel {
			export class CallbackListener extends androidx.biometric.AuthenticationCallbackProvider.Listener {
				public static class: java.lang.Class<androidx.biometric.BiometricViewModel.CallbackListener>;
			}
			export class DefaultExecutor {
				public static class: java.lang.Class<androidx.biometric.BiometricViewModel.DefaultExecutor>;
				public execute(param0: java.lang.Runnable): void;
			}
			export class NegativeButtonListener {
				public static class: java.lang.Class<androidx.biometric.BiometricViewModel.NegativeButtonListener>;
				public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class CancellationSignalProvider {
			public static class: java.lang.Class<androidx.biometric.CancellationSignalProvider>;
		}
		export module CancellationSignalProvider {
			export class Api16Impl {
				public static class: java.lang.Class<androidx.biometric.CancellationSignalProvider.Api16Impl>;
			}
			export class Injector {
				public static class: java.lang.Class<androidx.biometric.CancellationSignalProvider.Injector>;
				/**
				 * Constructs a new instance of the androidx.biometric.CancellationSignalProvider$Injector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { getBiometricCancellationSignal(): globalAndroid.os.CancellationSignal; getFingerprintCancellationSignal(): androidx.core.os.CancellationSignal });
				public constructor();
				public getBiometricCancellationSignal(): globalAndroid.os.CancellationSignal;
				public getFingerprintCancellationSignal(): androidx.core.os.CancellationSignal;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class CryptoObjectUtils {
			public static class: java.lang.Class<androidx.biometric.CryptoObjectUtils>;
		}
		export module CryptoObjectUtils {
			export class Api23Impl {
				public static class: java.lang.Class<androidx.biometric.CryptoObjectUtils.Api23Impl>;
			}
			export class Api28Impl {
				public static class: java.lang.Class<androidx.biometric.CryptoObjectUtils.Api28Impl>;
			}
			export class Api30Impl {
				public static class: java.lang.Class<androidx.biometric.CryptoObjectUtils.Api30Impl>;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class DeviceUtils {
			public static class: java.lang.Class<androidx.biometric.DeviceUtils>;
		}
	}
}

declare module androidx {
	export module biometric {
		export class ErrorUtils {
			public static class: java.lang.Class<androidx.biometric.ErrorUtils>;
		}
	}
}

declare module androidx {
	export module biometric {
		export class FingerprintDialogFragment {
			public static class: java.lang.Class<androidx.biometric.FingerprintDialogFragment>;
			public onResume(): void;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
			public onPause(): void;
			public constructor();
			public onCancel(param0: globalAndroid.content.DialogInterface): void;
		}
		export module FingerprintDialogFragment {
			export class Api21Impl {
				public static class: java.lang.Class<androidx.biometric.FingerprintDialogFragment.Api21Impl>;
			}
			export class Api26Impl {
				public static class: java.lang.Class<androidx.biometric.FingerprintDialogFragment.Api26Impl>;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class KeyguardUtils {
			public static class: java.lang.Class<androidx.biometric.KeyguardUtils>;
		}
		export module KeyguardUtils {
			export class Api16Impl {
				public static class: java.lang.Class<androidx.biometric.KeyguardUtils.Api16Impl>;
			}
			export class Api23Impl {
				public static class: java.lang.Class<androidx.biometric.KeyguardUtils.Api23Impl>;
			}
		}
	}
}

declare module androidx {
	export module biometric {
		export class PackageUtils {
			public static class: java.lang.Class<androidx.biometric.PackageUtils>;
		}
		export module PackageUtils {
			export class Api23Impl {
				public static class: java.lang.Class<androidx.biometric.PackageUtils.Api23Impl>;
			}
		}
	}
}

//Generics information:

// Utils.java

declare module org {
	export module nativescript {
		export module plugins {
			export module fingerprint {
				export class Utils {
					public static class: java.lang.Class<org.nativescript.plugins.fingerprint.Utils>;
					public constructor();
					public static createCryptoObject(param0: javax.crypto.Cipher): androidx.biometric.BiometricPrompt.CryptoObject;
				}
			}
		}
	}
}
