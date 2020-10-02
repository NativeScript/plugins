import { Color, ContentView, InheritedCssProperty, Style } from '@nativescript/core';

export const spinBarColorProperty = new InheritedCssProperty<Style, Color>({
	name: 'spinBarColor',
	cssName: 'spin-bar-color',
	equalityComparer: Color.equals,
	valueConverter: (value) => new Color(value),
});
export const rimColorProperty = new InheritedCssProperty<Style, Color>({
	name: 'rimColor',
	cssName: 'rim-color',
	equalityComparer: Color.equals,
	valueConverter: (value) => new Color(value),
});
export const barColorProperty = new InheritedCssProperty<Style, Color>({
	name: 'barColor',
	cssName: 'bar-color',
	equalityComparer: Color.equals,
	valueConverter: (value) => new Color(value),
});

export class AnimatedCircleCommon extends ContentView {
	constructor() {
		super();
	}
}

// register after class definition or we'll get an exception according
// to
// https://docs.nativescript.org/core-concepts/properties#registering-the-property

// augmenting style definitino so it includes rimColor and barColor
declare module '@nativescript/core/ui/styling/style' {
	interface Style {
		spinBarColor: Color;
		rimColor: Color;
		barColor: Color;
	}
}
// defines 'spinBarColor' property on Style class
spinBarColorProperty.register(Style);
// defines 'rimColor' property on Style class
rimColorProperty.register(Style);
// defines 'barColor' property on Style class
barColorProperty.register(Style);
