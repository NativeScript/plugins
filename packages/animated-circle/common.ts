import { Color, ContentView, InheritedCssProperty, Style } from '@nativescript/core';

export const rimWidthProperty = new InheritedCssProperty<Style, Number>({
	name: 'rimWidth',
	cssName: 'rim-width',
});

export const barWidthProperty = new InheritedCssProperty<Style, Number>({
	name: 'barWidth',
	cssName: 'bar-width',
});

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

// register after class definition or we'll get an exception according to
// https://docs.nativescript.org/core-concepts/properties#registering-the-property

rimWidthProperty.register(Style);
barWidthProperty.register(Style);
// defines 'spinBarColor' property on Style class
spinBarColorProperty.register(Style);
// defines 'rimColor' property on Style class
rimColorProperty.register(Style);
// defines 'barColor' property on Style class
barColorProperty.register(Style);
