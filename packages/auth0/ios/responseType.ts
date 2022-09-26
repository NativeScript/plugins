export class ResponseType {
	public readonly rawValue: number;

	public constructor(rawValue: number) {
		this.rawValue = rawValue;
	}

	public static readonly token = new ResponseType(1 << 0);
	public static readonly idToken = new ResponseType(1 << 1);
	public static readonly code = new ResponseType(1 << 2);

	public get label(): string | null {
		switch (this.rawValue) {
			case ResponseType.token.rawValue:
				return 'token';
			case ResponseType.idToken.rawValue:
				return 'id_token';
			case ResponseType.code.rawValue:
				return 'code';
			default:
				return null;
		}
	}
}
