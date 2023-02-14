import { EventData } from '@nativescript/core';
import { BaseComposeDataDriver, JetpackComposeCommon } from './common';
export * from './common';

export declare interface JetpackComposeEventData<T> extends EventData {
	data: T;
}

export declare interface IJetpackComposeProvider {
	generateComposeView(composeView: androidx.compose.ui.platform.ComposeView): void;
	onEvent: unknown;
	updateData(data: unknown): void;
}

export declare class JetpackCompose<T = any, K = any> extends JetpackComposeCommon {
	static jetpackComposeEventEvent = 'jetpackComposeEvent';
	updateData(data: K);
	on(evtName: 'jetpackComposeEvent', cb: (args: JetpackComposeEventData<T>) => void, thisArg?: any);
}

export class ComposeDataDriver<T extends IJetpackComposeProvider, K = unknown, V = unknown> extends BaseComposeDataDriver<JetpackCompose, K, V> {
	constructor(jetpackComposeProvider: T, view: JetpackCompose);
	onEvent(data: any): void;
	updateData(data: any): void;
	renderInNativeView(composeView: androidx.compose.ui.platform.ComposeView): void;
	registerEvents(callback: (data: any) => void): void;
}

export type RegistryCallback = (view: JetpackCompose) => BaseComposeDataDriver<JetpackCompose>;

export declare function registerJetpackCompose(id: string, callback: RegistryCallback);
