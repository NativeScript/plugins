import { Color } from '@nativescript/core';
import { IGradient } from '..';

export function applyMixins(
	derivedCtor: any,
	baseCtors: any[],
	options?: {
		after?: boolean;
		override?: boolean;
		omit?: (string | symbol)[];
	}
) {
	const omits = options && options.omit ? options.omit : [];
	baseCtors.forEach((baseCtor) => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
			if (omits.indexOf(name) !== -1) {
				return;
			}
			const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);

			if (name === 'constructor') return;
			if (descriptor && (descriptor.get || descriptor.set)) {
				Object.defineProperty(derivedCtor.prototype, name, descriptor);
			} else {
				const oldImpl = derivedCtor.prototype[name];
				if (!oldImpl) {
					derivedCtor.prototype[name] = baseCtor.prototype[name];
				} else {
					derivedCtor.prototype[name] = function (...args) {
						if (options) {
							if (!!options.override) {
								return baseCtor.prototype[name].apply(this, args);
							} else if (!!options.after) {
								oldImpl.apply(this, args);
								return baseCtor.prototype[name].apply(this, args);
							} else {
								baseCtor.prototype[name].apply(this, args);
								return oldImpl.apply(this, args);
							}
						} else {
							baseCtor.prototype[name].apply(this, args);
							return oldImpl.apply(this, args);
						}
					};
				}
			}
		});
		Object.getOwnPropertySymbols(baseCtor.prototype).forEach((symbol) => {
			if (omits.indexOf(symbol) !== -1) {
				return;
			}
			const oldImpl: Function = derivedCtor.prototype[symbol];
			if (!oldImpl) {
				derivedCtor.prototype[symbol] = baseCtor.prototype[symbol];
			} else {
				derivedCtor.prototype[symbol] = function (...args) {
					if (options) {
						if (!!options.override) {
							return baseCtor.prototype[symbol].apply(this, args);
						} else if (!!options.after) {
							oldImpl.apply(this, args);
							return baseCtor.prototype[symbol].apply(this, args);
						} else {
							baseCtor.prototype[symbol].apply(this, args);
							return oldImpl.apply(this, args);
						}
					} else {
						baseCtor.prototype[symbol].apply(this, args);
						return oldImpl.apply(this, args);
					}
				};
			}
		});
	});
}

export function intoNativeColor(color: Color | string) {
	if (color instanceof Color) {
		return global.isAndroid ? color.android : color.ios;
	} else if (typeof color === 'string') {
		const res = new Color(color);
		return global.isAndroid ? res.android : res.ios;
	}
	return null;
}

export function intoNativeHeatmapGradient(gradients: IGradient[]): any {
	const { colors, stops } = gradients.reduce<{
		colors: any[];
		stops: number[];
	}>(
		(acc, gradient) => {
			acc.colors.push(intoNativeColor(gradient.color));
			acc.stops.push(gradient.stop);

			return acc;
		},
		{ colors: [], stops: [] }
	);

	if (global.isAndroid) {
		const _colors = Array.create('int', colors.length);
		for (let i = 0; i < colors.length; i++) {
			_colors[i] = colors[i];
		}
		const _stops = Array.create('float', stops.length);
		for (let i = 0; i < stops.length; i++) {
			_stops[i] = stops[i];
		}

		return new com.google.maps.android.heatmaps.Gradient(_colors, _stops);
	} else {
		return GMUGradient.alloc().initWithColorsStartPointsColorMapSize(colors, stops, 256);
	}
}
