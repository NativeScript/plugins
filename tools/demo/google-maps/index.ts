import { DemoSharedBase } from '../utils';
import {} from '@nativescript/google-maps';

export class DemoSharedGoogleMaps extends DemoSharedBase {
	onReady(args) {
		console.log('onReady');
	}

	onTap(args) {
		console.log('onTap');
	}

	onLongPress(args) {
		console.log('onLongPress');
	}

	onMarkerTap(args) {
		console.log('onMarkerTap');
	}
}
