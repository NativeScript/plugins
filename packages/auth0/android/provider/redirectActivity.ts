import Intent = android.content.Intent;
import Bundle = android.os.Bundle;

import { AuthenticationActivity } from './authenticationActivity';

@NativeClass()
@JavaProxy('org.nativescript.auth0.RedirectActivity')
export class RedirectActivity extends android.app.Activity {
	constructor() {
		super();
		return global.__native(this);
	}

	public onCreate(savedInstanceBundle: Bundle): void {
		super.onCreate(savedInstanceBundle);
		const intent = new Intent(this, AuthenticationActivity.class);
		intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
		if (this.getIntent() != null) {
			intent.setData(this.getIntent().getData());
		}
		this.startActivity(intent);
		this.finish();
	}
}
