import Base64 = android.util.Base64;

export class Telemetry {
	public static readonly HEADER_NAME: string = 'Auth0-Client';

	private static readonly NAME_KEY: string = 'name';
	private static readonly VERSION_KEY: string = 'version';
	private static readonly LIB_VERSION_KEY: string = 'lib_version';

	private readonly name: string;
	private readonly version: string;
	private readonly libraryVersion: string | undefined;

	constructor(name: string, version: string, libraryVersion: string = undefined) {
		this.name = name;
		this.version = version;
		this.libraryVersion = libraryVersion;
	}

	public getName(): string {
		return this.name;
	}

	public getVersion(): string {
		return this.version;
	}

	public getLibraryVersion(): string | undefined {
		return this.libraryVersion;
	}

	public getValue(): string {
		const values: { [key: string]: any } = {};
		if (this.name != null) {
			values[Telemetry.NAME_KEY] = this.name;
		}
		if (this.version != null) {
			values[Telemetry.VERSION_KEY] = this.version;
		}
		if (this.libraryVersion != null) {
			values[Telemetry.LIB_VERSION_KEY] = this.libraryVersion;
		}
		if (Object.keys(values).length === 0) {
			return null;
		}
		const javaString = new java.lang.String(JSON.stringify(values));
		return Base64.encodeToString(javaString.getBytes('UTF-8'), Base64.URL_SAFE | Base64.NO_WRAP | Base64.NO_PADDING);
	}
}
