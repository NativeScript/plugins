import { Component, NgZone } from '@angular/core';
import { DemoSharedRoomplan } from '@demo/shared';
import {} from '@nativescript/roomplan';

@Component({
	selector: 'demo-roomplan',
	templateUrl: 'roomplan.component.html',
})
export class RoomplanComponent {
	demoShared: DemoSharedRoomplan;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedRoomplan();
	}
}
