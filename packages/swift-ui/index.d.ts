import { EventData } from '@nativescript/core';
import { SwiftUICommon, BaseUIDataDriver } from './common';

export * from './common';

export declare function registerSwiftUI(id: string, callback: RegistryCallback);
export declare interface SwiftUIEventData<T> extends EventData {
	data: T;
}

export declare interface DefaultSwiftUIHolder {
	view: UIView;
	onEvent: unknown;
	updateDataWithData(data: unknown): void;
}

export declare class SwiftUI<T = any, K = any> extends SwiftUICommon {
	static swiftUIEventEvent = 'swiftUIEvent';
	updateData(data: K);
	on(evtName: SwiftUI.swiftUIEventEvent, cb: (args: SwiftUIEventData<T>) => void, thisArg?: any);
}

export class UIDataDriver<T extends DefaultSwiftUIHolder, K = unknown, V = unknown> extends BaseUIDataDriver<SwiftUI, K, V> {
	constructor(composeHolder: T, view: SwiftUI);
	onEvent(data: ReceivedDataType): void;
	updateData(data: DataType): void;
	createNativeView(): UIView;
	registerEvents(callback: (data: ReceivedDataType) => void): void;
}

export type RegistryCallback = (view: SwiftUI) => BaseUIDataDriver<SwiftUI>;
