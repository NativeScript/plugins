import Context = android.content.Context;
import Intent = android.content.Intent;
import Parcel = android.os.Parcel;
import Parcelable = android.os.Parcelable;
import CustomTabsIntent = androidx.browser.customtabs.CustomTabsIntent;
import CustomTabsSession = androidx.browser.customtabs.CustomTabsSession;
import ContextCompat = androidx.core.content.ContextCompat;

/**
 * Holder for Custom Tabs customization options. Use {@link CustomTabsOptions#newBuilder()} to begin.
 */
@NativeClass()
@Interfaces([Parcelable])
class CustomTabsOptions extends java.lang.Object {
	private showTitle: boolean;
	private toolbarColor: number;

	constructor() {
		super();
		return global.__native(this);
	}

	public static create(showTitle: boolean = false, toolbarColor: number = 0): CustomTabsOptions {
		const options = new CustomTabsOptions();
		options.showTitle = showTitle;
		options.toolbarColor = toolbarColor;
		return options;
	}

	public toIntent(context: Context, session: CustomTabsSession): Intent {
		const builder: CustomTabsIntent.Builder = new CustomTabsIntent.Builder(session).setShowTitle(this.showTitle);
		if (this.toolbarColor > 0) {
			// Resource exists
			builder.setToolbarColor(ContextCompat.getColor(context, this.toolbarColor));
		}
		return builder.build().intent;
	}

	public describeContents(): number {
		return 0;
	}

	public writeToParcel(dest: Parcel, flags: number) {
		dest.writeByte(this.showTitle ? 0x01 : 0x00);
		dest.writeInt(this.toolbarColor);
	}

	public static readonly CREATOR: Parcelable.Creator<CustomTabsOptions> = new Parcelable.Creator<CustomTabsOptions>({
		createFromParcel: function (parcel: Parcel): CustomTabsOptions {
			const showTitle = parcel.readByte() !== 0x00;
			const toolbarColor = parcel.readInt();
			return CustomTabsOptions.create(showTitle, toolbarColor);
		},
		newArray: function (size: number): CustomTabsOptions[] {
			return Array.create(CustomTabsOptions, size);
		},
	});
}

export { CustomTabsOptions };
