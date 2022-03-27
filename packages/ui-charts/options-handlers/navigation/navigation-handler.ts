import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function navigationHandler(navigationOptions) {
	const navigation = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HINavigation() : new HINavigation();

	const navigationSchema = {
		activeColor: 'HIColor',
		animation: 'HIAnimationOptionsObject',
		annotationsOptions: 'HIAnnotationsOptions',
		arrowSize: 'number',
		bindings: 'HIBindings',
		bindingsClassName: 'string',
		buttonOptions: 'HIButtonOptions',
		enabled: 'number',
		events: 'HIEvents',
		iconsURL: 'string',
		inactiveColor: 'HIColor',
		menuItemHoverStyle: 'HICSSObject',
		menuItemStyle: 'HICSSObject',
		menuStyle: 'HICSSObject',
		popup: 'HIPopup',
		style: 'HICSSObject',
	};

	return optionsBuilder(navigationSchema, navigationOptions, navigation);
}
