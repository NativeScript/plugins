import { ContentView, View, Property, AddChildFromBuilder, booleanConverter, CoreTypes } from '@nativescript/core';

export const forIdProperty = new Property<ToolbarBase, string>({
	name: 'forId',
});

export const showWhenKeyboardHiddenProperty = new Property<ToolbarBase, boolean>({
	name: 'showWhenKeyboardHidden',
	defaultValue: false,
	valueConverter: booleanConverter,
});

export const showAtBottomWhenKeyboardHiddenProperty = new Property<ToolbarBase, boolean>({
	name: 'showAtBottomWhenKeyboardHidden',
	defaultValue: false,
	valueConverter: booleanConverter,
});

export abstract class ToolbarBase extends ContentView implements AddChildFromBuilder {
	content: View;
	verticalAlignment: CoreTypes.VerticalAlignmentType;

	private static DEBUG = false;

	// if the keyboard is hidden without blurring the textfield (and vice versa) then the blur/focus events don't fire, so track focus manually
	protected hasFocus = false;

	protected forId: string;

	protected showWhenKeyboardHidden: boolean;

	// TODO rename showAtBottomWhenKeyboardHidden to moveToAtBottomWhenKeyboardHidden (?)
	protected showAtBottomWhenKeyboardHidden: boolean;

	protected abstract _loaded(): void;

	protected abstract _unloaded(): void;

	protected _layout(left: number, top: number, right: number, bottom: number): void {}

	protected log(what: string): void {
		if (ToolbarBase.DEBUG) {
			console.log('⌨︎ ' + what);
		}
	}

	onLoaded(): void {
		super.onLoaded();
		// TODO figure out how to determine and apply the parent's height automatically based on the child's height
		if (isNaN(+this.height)) {
			console.log(`\n⌨ ⌨ ⌨ Please specify height="<nr of px>" or the toolbar won't render correctly! Example: <Toolbar forId="${this.forId}" height="44">\n\n`);
		}
		this._loaded();
	}

	onUnloaded(): void {
		super.onUnloaded();
		this._unloaded();
	}

	public onLayout(left: number, top: number, right: number, bottom: number): void {
		super.onLayout(left, top, right, bottom);
		this._layout(left, top, right, bottom);
	}

	_addChildFromBuilder(name: string, value: View): void {
		this.content = value;
	}

	[forIdProperty.setNative](value: string) {
		this.forId = value;
	}

	[showWhenKeyboardHiddenProperty.setNative](value: boolean) {
		this.showWhenKeyboardHidden = value;
	}

	[showAtBottomWhenKeyboardHiddenProperty.setNative](value: boolean) {
		this.showAtBottomWhenKeyboardHidden = value;
	}
}

forIdProperty.register(ToolbarBase);
showWhenKeyboardHiddenProperty.register(ToolbarBase);
showAtBottomWhenKeyboardHiddenProperty.register(ToolbarBase);
