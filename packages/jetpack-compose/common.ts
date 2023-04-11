import { Observable, Property, View } from '@nativescript/core';

export enum JetpackComposeEvents {
	composeEvent = 'composeEvent',
}
export class JetpackComposeCommon extends View {
	// TODO: change core to not have to do this
	static composeEventEvent = 'composeEvent';
	composeId: string;
	data: any;
}

export abstract class BaseComposeDataDriver<ViewType extends JetpackComposeCommon = JetpackComposeCommon, DataType = unknown, ReceivedDataType = unknown> {
	protected owner: WeakRef<ViewType>;
	constructor(view: ViewType) {
		this.owner = new WeakRef(view);
	}
	updateData?(data: DataType): void;
	abstract renderInNativeView(composeView: androidx.compose.ui.platform.ComposeView): void;
	registerEvents?(callback: (data: ReceivedDataType) => void): void;
	// if this is defined then this function is used instead of notifying on the owner directly (view.notify)
	onEvent?(data: ReceivedDataType): void;
	destroyNativeView?(): void;
}

export const dataProperty = new Property<JetpackComposeCommon, unknown>({
	name: 'data',
});
dataProperty.register(JetpackComposeCommon);

export const composeIdProperty = new Property<JetpackComposeCommon, string>({
	name: 'composeId',
});

composeIdProperty.register(JetpackComposeCommon);
