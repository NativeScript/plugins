import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { MapView } from '@nativescript/google-maps';
import { MapViewDirective } from './map-view-directive';

export * from './map-view-directive';

@NgModule({
	declarations: [MapViewDirective],
	exports: [MapViewDirective],
})
export class GoogleMapsModule {}

registerElement('MapView', () => MapView);
