import { SignInOptions, User } from ".";
import { CredentialState, UNSUPPORTED } from "./common";

export class SignIn {
    public static signIn(
        options?: SignInOptions
    ) {
        return new Promise<User>((resolve, reject) => {
            if (!SignIn.isSupported()) {
                reject(UNSUPPORTED);
            }
        });
    }

    public static isSupported() {
        return false;
    }

    public static getState(userID: string) {
        return new Promise<CredentialState>((resolve, reject) => {
            if (!SignIn.isSupported()) {
                reject(UNSUPPORTED);
            }
        });
    }
}