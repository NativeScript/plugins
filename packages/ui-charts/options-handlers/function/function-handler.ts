import { isAndroid } from '@nativescript/core';

export function functionHandler(functionOptions) {
	const cleanFunction = (fun) => fun.toString().replace(/\n/g, ' ').replace(/\t/g, ' ').replace(/\r/g, ' ');
	const hiFunction = isAndroid ? new com.highsoft.highcharts.core.HIFunction(cleanFunction(functionOptions)) : new HIFunction({ JSFunction: cleanFunction(functionOptions) });

	return hiFunction;
}
