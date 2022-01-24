export interface IContactCollection {
	id?: any;
	label?: string;
	value?: string;
	location?: any;
}
export class ContactCommon {
	id: string;
	name?: {
		given?: string;
		middle?: string;
		family?: string;
		prefix?: string;
		suffix?: string;
		displayname?: string;
		phonetic?: {
			given?: string;
			middle?: string;
			family?: string;
		};
	};
	organization?: {
		name?: string;
		jobTitle?: string;
		department?: string;
		symbol?: string;
		phonetic?: string;
		location?: string;
		type?: string;
	};
	nickname?: string;
	notes?: string;
	photo?: any;
	urls?: Array<IContactCollection>;
	phoneNumbers?: Array<IContactCollection>;
	emailAddresses?: Array<IContactCollection>;
	postalAddresses?: Array<IContactCollection>;

	constructor() {
		this.id = '';
		this.name = {
			given: '',
			middle: '',
			family: '',
			prefix: '',
			suffix: '',
			displayname: '',
			phonetic: {
				given: '',
				middle: '',
				family: '',
			},
		};

		this.organization = {
			name: '',
			jobTitle: '',
			department: '',
			symbol: '',
			phonetic: '',
			location: '',
			type: '',
		};

		this.nickname = '';
		this.notes = '';
		this.photo = null;

		this.urls = [];
		this.phoneNumbers = [];
		this.emailAddresses = [];
		this.postalAddresses = [];
	}

	initializeFromNative(nativeData, contactFields): void {}

	save(): void {}

	delete(): void {}
}
