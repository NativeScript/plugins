import { isAndroid } from '@nativescript/core';
import { seriesHandler } from '../series-handler';
import { convertJSArrayToNative, optionsBuilder } from '../../helpers/helpers';

export function organizationHandler(organizationOptions) {
	const organizationSchema = {
		borderColor: 'HIColor',
		borderRadius: 'number',
		borderWidth: 'number',
		centerInCategory: 'number',
		colorByPoint: 'number',
		colors: 'HIColor',
		hangingIndent: 'number',
		levels: 'HILevels', // array
		linkColor: 'HIColor',
		linkLineWidth: 'number',
		linkOpacity: 'number',
		linkRadius: 'number',
		minLinkWidth: 'number',
		nodePadding: 'number',
		nodeWidth: 'number',
		nodes: 'HINodes', // array
	};

	if (organizationOptions instanceof Array) {
		const seriesArr = [];

		for (const opts of organizationOptions) {
			const organization = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIOrganization() : new HIOrganization();
			seriesArr.push(seriesHandler(opts, optionsBuilder(organizationSchema, opts, organization)));
		}

		return convertJSArrayToNative(seriesArr);
	} else {
		const organization = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIOrganization() : new HIOrganization();
		return seriesHandler(organizationOptions, optionsBuilder(organizationSchema, organizationOptions, organization));
	}
}
