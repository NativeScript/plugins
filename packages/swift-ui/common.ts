import { View, Property } from '@nativescript/core';

export class SwiftUICommon extends View {
	static swiftUIEventEvent = 'swiftUIEvent';
	data: any;
	swiftId: string;
}

export abstract class BaseUIDataDriver<ViewType extends SwiftUICommon = SwiftUICommon, DataType = unknown, ReceivedDataType = unknown> {
	protected owner: WeakRef<ViewType>;
	constructor(view: ViewType) {
		this.owner = new WeakRef(view);
	}
	updateData?(data: DataType): void;
	onEvent?(data: ReceivedDataType): void;
	abstract createNativeView(): UIView;
	registerEvents?(callback: (data: ReceivedDataType) => void): void;
	destroyNativeView?(): void;
}

export const swiftDataProperty = new Property<SwiftUICommon, any>({
	name: 'data',
});

swiftDataProperty.register(SwiftUICommon);

export const swiftIdProperty = new Property<SwiftUICommon, string>({
	name: 'swiftId',
});

swiftIdProperty.register(SwiftUICommon);
