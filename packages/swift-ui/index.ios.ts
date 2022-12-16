import { swiftDataProperty, SwiftUICommon, BaseUIDataDriver } from './common';
import type { DefaultSwiftUIHolder, RegistryCallback } from '.';
import { Utils } from '@nativescript/core';
export * from './common';

const registry = new Map<string, RegistryCallback>();

export function registerSwiftUI(id: string, callback: RegistryCallback) {
	registry.set(id, callback);
}

export class UIDataDriver extends BaseUIDataDriver<SwiftUI> {
	constructor(private composeHolder: DefaultSwiftUIHolder, owner: SwiftUI) {
		super(owner);
	}
	createNativeView(): UIView {
		const vc = this.composeHolder;
		return vc.view;
	}
	registerEvents(callback): void {
		this.composeHolder.onEvent = (data) => {
			callback(data);
		};
	}
	updateData(data) {
		this.composeHolder.updateDataWithData(data);
	}
	onEvent(data) {
		const owner = this.owner.get();
		if (owner) {
			owner.notify({
				eventName: SwiftUICommon.swiftUIEventEvent,
				data: Utils.dataDeserialize(data),
			});
		}
	}
}

export class SwiftUI extends SwiftUICommon {
	private swiftUIBridge: BaseUIDataDriver;

	createNativeView() {
		const generator = registry.get(this.swiftId);

		if (!generator) {
			console.warn('view not registered:', this.swiftId);
			return UIView.new();
		}
		this.swiftUIBridge = generator(this as any);
		return this.swiftUIBridge.createNativeView();
	}

	initNativeView(): void {
		if (!this.swiftUIBridge) {
			return;
		}

		this.swiftUIBridge.registerEvents((data) => {
			if (this.swiftUIBridge.onEvent) {
				this.swiftUIBridge.onEvent(data);
			} else {
				this.notify({
					eventName: SwiftUI.swiftUIEventEvent,
					data,
				});
			}
		});
	}

	disposeNativeView(): void {
		super.disposeNativeView();
		if (this.swiftUIBridge) {
			this.swiftUIBridge.destroyNativeView?.();
		}
	}

	[swiftDataProperty.setNative](data: any) {
		this.updateData(data);
	}

	updateData(data: Record<string, any>) {
		this.swiftUIBridge?.updateData?.(data);
	}
}
