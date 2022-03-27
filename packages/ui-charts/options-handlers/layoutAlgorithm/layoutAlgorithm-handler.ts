import { optionsBuilder } from '../helpers/helpers';
import { isAndroid } from '@nativescript/core';

export function layoutAlgorithmHandler(layoutAlgorithmOptions) {
	const layoutAlgorithm = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILayoutAlgorithm() : new HILayoutAlgorithm();

	const layoutAlgorithmSchema = {
		approximation: 'string',
		attractiveForce: 'HIFunction',
		bubblePadding: 'number',
		distance: 'number',
		dragBetweenSeries: 'number',
		enableSimulation: 'number',
		friction: 'number',
		gravitationalConstant: 'number',
		gridSize: 'number',
		initialPositionRadius: 'number',
		initialPositions: 'string',
		integration: 'string',
		iterations: 'number',
		kmeansThreshold: 'number',
		linkLength: 'number',
		maxIterations: 'number',
		maxSpeed: 'number',
		parentNodeLimit: 'number',
		parentNodeOptions: 'HIParentNodeOptions',
		repulsiveForce: 'HIFunction',
		seriesInteraction: 'number',
		splitSeries: 'string',
		theta: 'number',
		type: 'string',
	};

	return optionsBuilder(layoutAlgorithmSchema, layoutAlgorithmOptions, layoutAlgorithm);
}
