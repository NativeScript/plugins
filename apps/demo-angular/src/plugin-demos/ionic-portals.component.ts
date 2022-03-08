import { Component, NgZone } from '@angular/core';
import { DemoSharedIonicPortals } from '@demo/shared';
import { } from '@nativescript/ionic-portals';

@Component({
	selector: 'demo-ionic-portals',
	templateUrl: 'ionic-portals.component.html',
})
export class IonicPortalsComponent {
  
  demoShared: DemoSharedIonicPortals;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedIonicPortals();
  }

}