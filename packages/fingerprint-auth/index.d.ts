export * from "./common";
import { BiometricIDAvailableResult, FingerprintAuthApi, VerifyFingerprintOptions, VerifyFingerprintWithCustomFallbackOptions } from "./common";
export declare class FingerprintAuth implements FingerprintAuthApi {
    available(): Promise<BiometricIDAvailableResult>;
    didFingerprintDatabaseChange(): Promise<boolean>;
    /**
     * this 'default' method uses keychain instead of localauth so the passcode fallback can be used
     */
    verifyFingerprint(options: VerifyFingerprintOptions): Promise<void | string>;
    /**
     * This implementation uses LocalAuthentication and has no built-in passcode fallback
     */
    verifyFingerprintWithCustomFallback(options: VerifyFingerprintWithCustomFallbackOptions, usePasscodeFallback?: boolean): Promise<void>;
    close(): void;
}
