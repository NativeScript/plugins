import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function frameHandler(frameOptions) {
	const frame = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIFrame() : new HIFrame();

	const frameSchema = {
		back: 'HIBack',
		bottom: 'HIBottom',
		front: 'HIFront',
		left: 'HILeft',
		right: 'HIRight',
		size: 'number',
		top: 'HITop',
		visible: 'string',
	};

	return optionsBuilder(frameSchema, frameOptions, frame);
}
