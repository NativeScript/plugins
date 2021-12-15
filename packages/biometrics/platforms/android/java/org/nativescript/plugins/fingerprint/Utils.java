package org.nativescript.plugins.fingerprint;
import javax.crypto.Cipher;
import androidx.biometric.BiometricPrompt.CryptoObject;

public class Utils {
    public static androidx.biometric.BiometricPrompt.CryptoObject createCryptoObject(javax.crypto.Cipher cipher) {
        return new androidx.biometric.BiometricPrompt.CryptoObject(cipher);
    }
}