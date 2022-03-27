import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function eventsHandler(eventsOptions) {
	const events = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIEvents() : new HIEvents();

	const eventsSchema = {
		add: 'HIFunction',
		addSeries: 'HIFunction',
		afterAnimate: 'HIFunction',
		afterBreaks: 'HIFunction',
		afterPrint: 'HIFunction',
		afterSetExtremes: 'HIFunction',
		afterUpdate: 'HIFunction',
		beforePrint: 'HIFunction',
		checkboxClick: 'HIFunction',
		click: 'HIFunction',
		closePopup: 'HIFunction',
		deselectButton: 'HIFunction',
		drag: 'HIFunction',
		dragStart: 'HIFunction',
		drillToCluster: 'HIFunction',
		drilldown: 'HIFunction',
		drillup: 'HIFunction',
		drillupall: 'HIFunction',
		drop: 'HIFunction',
		exportData: 'HIFunction',
		hide: 'HIFunction',
		legendItemClick: 'HIFunction',
		load: 'HIFunction',
		mouseOut: 'HIFunction',
		mouseOver: 'HIFunction',
		mousemove: 'HIFunction',
		mouseout: 'HIFunction',
		mouseover: 'HIFunction',
		pointBreak: 'HIFunction',
		pointInBreak: 'HIFunction',
		redraw: 'HIFunction',
		remove: 'HIFunction',
		render: 'HIFunction',
		select: 'HIFunction',
		selectButton: 'HIFunction',
		selection: 'HIFunction',
		setExtremes: 'HIFunction',
		setRootNode: 'HIFunction',
		show: 'HIFunction',
		showPopup: 'HIFunction',
		unselect: 'HIFunction',
		update: 'HIFunction',
	};

	return optionsBuilder(eventsSchema, eventsOptions, events);
}
