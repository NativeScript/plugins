declare namespace com {
	export namespace auth0 {
		export namespace android {
			export namespace jwt {
				export class Claim extends java.lang.Object {
					public asString(): string;
				}
				export class DecodeException extends java.lang.Exception {}
				export class JWT extends java.lang.Object {
					constructor(token: string);
					public getClaim(claimName: string): Claim;
				}
			}
		}
	}
}
