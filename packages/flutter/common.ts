import { ContentView, Observable } from '@nativescript/core';

export type FlutterChannelType = { [key: string]: (...args: any[]) => Promise<any> };

export class FlutterCommon extends ContentView {
	static invokeResultEvent = 'invokeResultEvent';
	channel: FlutterChannelType;

	invoke(name: string, args?: Array<any>, callback?: (value?: any) => void) {
		// impl specific
	}
}
