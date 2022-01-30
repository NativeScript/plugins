import { Application, ImageSource, Utils } from '@nativescript/core';
import { KnownLabel } from './common';

/* missing constants from the {N} */
const TYPE_CUSTOM = 0;
const RAW_CONTACT_ID = 'raw_contact_id'; // android.provider.ContactsContract.Data.RAW_CONTACT_ID
const CONTACT_ID = 'contact_id'; // android.provider.ContactsContract.Data.CONTACT_ID
const MIMETYPE = 'mimetype'; // android.provider.ContactsContract.Data.MIMETYPE

export class ContactHelper {
	static android = {
		getContext() {
			if (Utils.android.getApplicationContext()) {
				return Utils.android.getApplicationContext();
			}
			let ctx = java.lang.Class.forName('android.app.AppGlobals').getMethod('getInitialApplication', null).invoke(null, null);
			if (ctx) return ctx;
		
			ctx = java.lang.Class.forName('android.app.ActivityThread').getMethod('currentApplication', null).invoke(null, null);
			return ctx;
		},
		getActivity() {
			return Application.android.foregroundActivity || Application.android.startActivity;
		},
		/*
		 * add nativescript image-source object to photo property - does not work from inside a web worker
		 */
		addImageSources(message) {
			try {
				message.data.forEach(function (contact) {
					if (contact.photo && contact.photo.photo_uri) {
						var bitmap = android.provider.MediaStore.Images.Media.getBitmap(Application.android.foregroundActivity.getContentResolver(), android.net.Uri.parse(contact.photo.photo_uri));
						var _photo = new ImageSource(bitmap);
						for (var prop in _photo) {
							contact.photo[prop] = _photo[prop];
						}
					}
				});
			} catch (e) {
				// console.log(e);
			}
			return message;
		},

		//Query Sample:
		//query(Uri uri, String[] projection, String selection, String[] selectionArgs, String sortOrder)
		getBasicCursor(uri, id) {
			var contentResolver = ContactHelper.android.getContext().getContentResolver();
			var cursor = contentResolver.query(uri, null, CONTACT_ID + '=' + id, null, null);
			//cursor.moveToFirst();

			return cursor;
		},

		//projection: String[]
		//parameters: String[]
		getComplexCursor(id, uri, projection, parameters) {
			var contentResolver = ContactHelper.android.getContext().getContentResolver();
			var cursor = contentResolver.query(uri, projection, CONTACT_ID + '=? AND ' + MIMETYPE + '=?', parameters, null);

			return cursor;
		},

		//http://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Email.html
		getEmailType(data2, data3) {
			var typeInt = parseInt(data2, 10);
			var typeConverted = '';

			switch (typeInt) {
				case TYPE_CUSTOM:
					typeConverted = data3; //LABEL
					break;
				case android.provider.ContactsContract.CommonDataKinds.Email.TYPE_HOME:
					typeConverted = KnownLabel.HOME;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Email.TYPE_WORK:
					typeConverted = KnownLabel.WORK;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Email.TYPE_OTHER:
					typeConverted = KnownLabel.OTHER;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Email.TYPE_MOBILE:
					typeConverted = KnownLabel.MOBILE;
					break;
			}

			return typeConverted;
		},

		getNativeEmailType(label) {
			var nativeType = TYPE_CUSTOM;

			switch (label) {
				case KnownLabel.HOME:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Email.TYPE_HOME;
					break;
				case KnownLabel.WORK:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Email.TYPE_WORK;
					break;
				case KnownLabel.OTHER:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Email.TYPE_OTHER;
					break;
				case KnownLabel.MOBILE:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Email.TYPE_MOBILE;
					break;
			}

			return nativeType;
		},

		//http://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Organization.html
		getOrgType(data2, data3) {
			var typeInt = parseInt(data2, 10);
			var typeConverted = '';
			switch (typeInt) {
				case TYPE_CUSTOM:
					typeConverted = data3; //LABEL
					break;
				case android.provider.ContactsContract.CommonDataKinds.Organization.TYPE_WORK:
					typeConverted = KnownLabel.WORK;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Organization.TYPE_OTHER:
					typeConverted = KnownLabel.OTHER;
					break;
			}

			return typeConverted;
		},

		getNativeOrgType(label) {
			var nativeType = TYPE_CUSTOM;

			switch (label) {
				case KnownLabel.WORK:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Organization.TYPE_WORK;
					break;
				case KnownLabel.OTHER:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Organization.TYPE_OTHER;
					break;
			}

			return nativeType;
		},

		//http://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Website.html
		getWebsiteType(data2, data3) {
			var typeInt = parseInt(data2, 10);
			var typeConverted = '';

			switch (typeInt) {
				case TYPE_CUSTOM:
					typeConverted = data3; //LABEL
					break;
				case android.provider.ContactsContract.CommonDataKinds.Website.TYPE_HOMEPAGE:
					typeConverted = KnownLabel.HOMEPAGE;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Website.TYPE_BLOG:
					typeConverted = KnownLabel.BLOG;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Website.TYPE_PROFILE:
					typeConverted = KnownLabel.PROFILE;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Website.TYPE_HOME:
					typeConverted = KnownLabel.HOME;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Website.TYPE_WORK:
					typeConverted = KnownLabel.WORK;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Website.TYPE_FTP:
					typeConverted = KnownLabel.FTP;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Website.TYPE_OTHER:
					typeConverted = KnownLabel.OTHER;
					break;
			}

			return typeConverted;
		},

		getNativeWebsiteType(label) {
			var nativeType = TYPE_CUSTOM;

			switch (label) {
				case KnownLabel.HOMEPAGE:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Website.TYPE_HOMEPAGE;
					break;
				case KnownLabel.BLOG:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Website.TYPE_BLOG;
					break;
				case KnownLabel.PROFILE:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Website.TYPE_PROFILE;
					break;
				case KnownLabel.HOME:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Website.TYPE_HOME;
					break;
				case KnownLabel.WORK:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Website.TYPE_WORK;
					break;
				case KnownLabel.FTP:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Website.TYPE_FTP;
					break;
				case KnownLabel.OTHER:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Website.TYPE_OTHER;
					break;
			}

			return nativeType;
		},

		//http://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Email.html
		getAddressType(data2, data3) {
			var typeInt = parseInt(data2, 10);
			var typeConverted = '';

			switch (typeInt) {
				case TYPE_CUSTOM:
					typeConverted = data3; //LABEL
					break;
				case android.provider.ContactsContract.CommonDataKinds.StructuredPostal.TYPE_HOME:
					typeConverted = KnownLabel.HOME;
					break;
				case android.provider.ContactsContract.CommonDataKinds.StructuredPostal.TYPE_WORK:
					typeConverted = KnownLabel.WORK;
					break;
				case android.provider.ContactsContract.CommonDataKinds.StructuredPostal.TYPE_OTHER:
					typeConverted = KnownLabel.OTHER;
					break;
			}

			return typeConverted;
		},

		getNativeAddressType(label) {
			var nativeType = TYPE_CUSTOM;

			switch (label) {
				case KnownLabel.HOME:
					nativeType = android.provider.ContactsContract.CommonDataKinds.StructuredPostal.TYPE_HOME;
					break;
				case KnownLabel.WORK:
					nativeType = android.provider.ContactsContract.CommonDataKinds.StructuredPostal.TYPE_WORK;
					break;
				case KnownLabel.OTHER:
					nativeType = android.provider.ContactsContract.CommonDataKinds.StructuredPostal.TYPE_OTHER;
					break;
			}

			return nativeType;
		},

		//http://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Phone.html
		getPhoneType(data2, data3) {
			var typeInt = parseInt(data2, 10);
			var typeConverted = '';

			switch (typeInt) {
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_HOME:
					typeConverted = KnownLabel.HOME;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_MOBILE:
					typeConverted = KnownLabel.MOBILE;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_WORK:
					typeConverted = KnownLabel.WORK;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_FAX_WORK:
					typeConverted = KnownLabel.FAX_WORK;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_FAX_HOME:
					typeConverted = KnownLabel.FAX_HOME;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_PAGER:
					typeConverted = KnownLabel.PAGER;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_OTHER:
					typeConverted = KnownLabel.OTHER;
					break;
				case TYPE_CUSTOM:
					typeConverted = data3; //Use LABEL
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_CALLBACK:
					typeConverted = KnownLabel.CALLBACK;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_CAR:
					typeConverted = KnownLabel.CAR;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_COMPANY_MAIN:
					typeConverted = KnownLabel.COMPANY_MAIN;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_ISDN:
					typeConverted = KnownLabel.ISDN;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_MAIN:
					typeConverted = KnownLabel.MAIN;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_OTHER_FAX:
					typeConverted = KnownLabel.OTHER_FAX;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_RADIO:
					typeConverted = KnownLabel.RADIO;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_TELEX:
					typeConverted = KnownLabel.TELEX;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_TTY_TDD:
					typeConverted = KnownLabel.TTY_TDD;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_WORK_MOBILE:
					typeConverted = KnownLabel.WORK_MOBILE;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_WORK_PAGER:
					typeConverted = KnownLabel.WORK_PAGER;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_ASSISTANT:
					typeConverted = KnownLabel.ASSISTANT;
					break;
				case android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_MMS:
					typeConverted = KnownLabel.MMS;
					break;
			}

			return typeConverted;
		},

		getNativePhoneType(label) {
			var nativeType = TYPE_CUSTOM;

			switch (label) {
				case KnownLabel.HOME:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_HOME;
					break;
				case KnownLabel.MOBILE:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_MOBILE;
					break;
				case KnownLabel.WORK:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_WORK;
					break;
				case KnownLabel.FAX_WORK:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_FAX_WORK;
					break;
				case KnownLabel.FAX_HOME:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_FAX_HOME;
					break;
				case KnownLabel.PAGER:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_PAGER;
					break;
				case KnownLabel.OTHER:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_OTHER;
					break;
				case KnownLabel.CALLBACK:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_CALLBACK;
					break;
				case KnownLabel.CAR:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_CAR;
					break;
				case KnownLabel.COMPANY_MAIN:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_COMPANY_MAIN;
					break;
				case KnownLabel.ISDN:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_ISDN;
					break;
				case KnownLabel.MAIN:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_MAIN;
					break;
				case KnownLabel.OTHER_FAX:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_OTHER_FAX;
					break;
				case KnownLabel.RADIO:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_RADIO;
					break;
				case KnownLabel.TELEX:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_TELEX;
					break;
				case KnownLabel.TTY_TDD:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_TTY_TDD;
					break;
				case KnownLabel.WORK_MOBILE:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_WORK_MOBILE;
					break;
				case KnownLabel.WORK_PAGER:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_WORK_PAGER;
					break;
				case KnownLabel.ASSISTANT:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_ASSISTANT;
					break;
				case KnownLabel.MMS:
					nativeType = android.provider.ContactsContract.CommonDataKinds.Phone.TYPE_MMS;
					break;
			}

			return nativeType;
		},

		getContactBuilder(id, mimetype) {
			var builder;

			if (id && id !== '') {
				builder = android.content.ContentProviderOperation.newUpdate(android.provider.ContactsContract.Data.CONTENT_URI).withSelection(CONTACT_ID + '=? AND ' + MIMETYPE + '=?', [id.toString(), mimetype]);
			} else {
				builder = android.content.ContentProviderOperation.newInsert(android.provider.ContactsContract.Data.CONTENT_URI).withValueBackReference(RAW_CONTACT_ID, 0).withValue(MIMETYPE, mimetype);
			}

			return builder;
		},

		getRawContactBuilder(rawId, mimetype, isDelete) {
			var builder;

			if (isDelete) {
				builder = android.content.ContentProviderOperation.newDelete(android.provider.ContactsContract.Data.CONTENT_URI).withSelection(RAW_CONTACT_ID + '=? AND ' + MIMETYPE + '=?', [rawId, mimetype]);
			} else if (rawId) {
				builder = android.content.ContentProviderOperation.newInsert(android.provider.ContactsContract.Data.CONTENT_URI).withValue(RAW_CONTACT_ID, rawId).withValue(MIMETYPE, mimetype);
			} else {
				builder = android.content.ContentProviderOperation.newInsert(android.provider.ContactsContract.Data.CONTENT_URI).withValueBackReference(RAW_CONTACT_ID, 0).withValue(MIMETYPE, mimetype);
			}

			return builder;
		},

		convertNativeCursorToJson(cursor) {
			//noinspection JSUnresolvedFunction
			var count = cursor.getColumnCount();
			var results = {};

			for (var i = 0; i < count; i++) {
				var type = cursor.getType(i);
				//noinspection JSUnresolvedFunction
				var name = cursor.getColumnName(i);

				switch (type) {
					case 0: // NULL
						results[name] = null;
						break;
					case 1: // Integer
						//noinspection JSUnresolvedFunction
						results[name] = cursor.getInt(i);
						break;
					case 2: // Float
						//noinspection JSUnresolvedFunction
						results[name] = cursor.getFloat(i);
						break;
					case 3: // String
						results[name] = cursor.getString(i);
						break;
					case 4: // Blob
						results[name] = cursor.getBlob(i);
						break;
					default:
						throw new Error('Contacts - Unknown Field Type ' + type);
				}
			}

			return results;
		},
	};
}
