import { FlutterCommon } from './common';

function makeFragmentName(viewId: number): string {
	return 'android:flutter:' + viewId;
}

export class Flutter extends FlutterCommon {
	_fragment;
	_androidViewId: number = -1;
	createNativeView(): Object {
		return new android.widget.FrameLayout(this._context);
	}

	initNativeView(): void {
		super.initNativeView();
		if (this._androidViewId < 0) {
			this._androidViewId = android.view.View.generateViewId();
		}

		this.nativeViewProtected.setId(this._androidViewId);

		const fm = this._getFragmentManager() as androidx.fragment.app.FragmentManager;

		this._fragment = io.flutter.embedding.android.FlutterFragment.createDefault();

		const name = makeFragmentName(this._androidViewId);

		const tr = fm.beginTransaction();

		tr.replace(this._androidViewId, this._fragment, name);

		tr.commitAllowingStateLoss();
	}
}
