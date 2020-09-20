import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'animated-circle',
		},
		{
			name: 'appavailability',
		},
		{
			name: 'auto-fit-text',
		},
		{
			name: 'background-http',
		},
		{
			name: 'brightness',
		},
		{
			name: 'camera',
		},
		{
			name: 'datetimepicker',
		},
		{
			name: 'directions',
		},
		{
			name: 'email',
		},
		{
			name: 'fingerprint-auth',
		},
		{
			name: 'geolocation',
		},
		{
			name: 'imagepicker',
		},
		{
			name: 'iqkeyboardmanager',
		},
		{
			name: 'local-notifications',
		},
		{
			name: 'localize',
		},
		{
			name: 'shared-notification-delegate',
		},
		{
			name: 'social-share',
		},
		{
			name: 'zip',
		},
	];
}
