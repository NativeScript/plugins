import { KnownLabel } from './common';

// Could not find respective constants for these???
var HOME_FAX = '_$!<HomeFAX>!$_';
var WORK_FAX = '_$!<WorkFAX>!$_';
var MAIN = '_$!<Main>!$_';

export class ContactHelper {
	static ios = {
		getiOSValue(key, contactData) {
			if (key === 'notes') {
				key = 'note';
			}
			return contactData.isKeyAvailable(key) ? contactData[key] : '';
		},
		getGenericLabel(nativeLabel) {
			var genericLabel = nativeLabel;

			switch (nativeLabel) {
				case CNLabelHome:
					genericLabel = KnownLabel.HOME;
					break;
				case CNLabelWork:
					genericLabel = KnownLabel.WORK;
					break;
				case CNLabelOther:
					genericLabel = KnownLabel.OTHER;
					break;
			}

			return genericLabel;
		},
		getNativeGenericLabel(label) {
			var nativeGenericLabel = label;

			switch (label) {
				case KnownLabel.HOME:
					nativeGenericLabel = CNLabelHome;
					break;
				case KnownLabel.WORK:
					nativeGenericLabel = CNLabelWork;
					break;
				case KnownLabel.OTHER:
					nativeGenericLabel = CNLabelOther;
					break;
			}

			return nativeGenericLabel;
		},

		getPhoneLabel(nativeLabel) {
			var phoneLabel = ContactHelper.ios.getGenericLabel(nativeLabel);

			switch (nativeLabel) {
				case kABPersonPhoneMobileLabel:
					phoneLabel = KnownLabel.MOBILE;
					break;
				case HOME_FAX:
					phoneLabel = KnownLabel.FAX_HOME;
					break;
				case WORK_FAX:
					phoneLabel = KnownLabel.FAX_WORK;
					break;
				case kABPersonPhonePagerLabel:
					phoneLabel = KnownLabel.PAGER;
					break;
				case MAIN:
					phoneLabel = KnownLabel.MAIN;
					break;
			}

			return phoneLabel;
		},

		getNativePhoneLabel(label) {
			var nativePhoneLabel = ContactHelper.ios.getNativeGenericLabel(label);

			switch (label) {
				case KnownLabel.MOBILE:
					nativePhoneLabel = kABPersonPhoneMobileLabel;
					break;
				case KnownLabel.FAX_HOME:
					nativePhoneLabel = HOME_FAX;
					break;
				case KnownLabel.FAX_WORK:
					nativePhoneLabel = WORK_FAX;
					break;
				case KnownLabel.PAGER:
					nativePhoneLabel = kABPersonPhonePagerLabel;
					break;
				case KnownLabel.MAIN:
					nativePhoneLabel = MAIN;
					break;
			}

			return nativePhoneLabel;
		},

		getWebsiteLabel(nativeLabel) {
			var phoneLabel = ContactHelper.ios.getGenericLabel(nativeLabel);

			switch (nativeLabel) {
				case CNLabelURLAddressHomePage:
					phoneLabel = KnownLabel.HOMEPAGE;
					break;
			}

			return phoneLabel;
		},

		getNativeWebsiteLabel(label) {
			var nativeWebsiteLabel = ContactHelper.ios.getNativeGenericLabel(label);

			switch (label) {
				case KnownLabel.HOMEPAGE:
					nativeWebsiteLabel = CNLabelURLAddressHomePage;
					break;
			}

			return nativeWebsiteLabel;
		},
	};
}
