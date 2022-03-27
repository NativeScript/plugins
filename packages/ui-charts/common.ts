import { Property, View } from '@nativescript/core';

export class UIChartsViewBase extends View {
	options: any;
}

export const optionsProperty = new Property<UIChartsViewBase, {}>({
	name: 'options',
	defaultValue: {},
	affectsLayout: true,
});
optionsProperty.register(UIChartsViewBase);
