import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function styleHandler(styleOptions) {
	const style = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HICSSObject() : new HICSSObject();

	const styleSchema = {
		background: 'string',
		backgroundColor: 'string',
		border: 'string',
		borderRadius: 'number',
		color: 'string',
		cursor: 'string',
		fontFamily: 'string',
		fontSize: 'string',
		fontWeight: 'string',
		height: 'number',
		lineWidth: 'number',
		opacity: 'number',
		padding: 'string',
		pointerEvents: 'string',
		position: 'string',
		textAlign: 'string',
		textDecoration: 'string',
		textOutline: 'string',
		textOverflow: 'string',
		top: 'string',
		transition: 'string',
		whiteSpace: 'string',
		width: 'number',
	};

	return optionsBuilder(styleSchema, styleOptions, style);
}
