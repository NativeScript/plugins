import { dataProperty, SwiftUICommon, BaseUIDataDriver } from './common';
import type { ISwiftUIProvider, RegistryCallback } from '.';
import { Utils } from '@nativescript/core';
export * from './common';

const registry = new Map<string, RegistryCallback>();

export function registerSwiftUI(id: string, callback: RegistryCallback) {
	registry.set(id, callback);
}

export class UIDataDriver extends BaseUIDataDriver<SwiftUI> {
	constructor(private swiftUIProvider: ISwiftUIProvider, owner: SwiftUI) {
		super(owner);
	}
	createNativeView(): UIView {
		const vc = this.swiftUIProvider;
		return vc.view;
	}
	registerEvents(callback): void {
		this.swiftUIProvider.onEvent = (data) => {
			callback(data);
		};
	}
	updateData(data) {
		this.swiftUIProvider.updateDataWithData(data);
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
	private driver: BaseUIDataDriver;

	createNativeView() {
		const generator = registry.get(this.swiftId);

		if (!generator) {
			console.warn('view not registered:', this.swiftId);
			return UIView.new();
		}
		this.driver = generator(this as any);
		return this.driver.createNativeView();
	}

	initNativeView(): void {
		if (!this.driver) {
			return;
		}

		this.driver.registerEvents((data) => {
			if (this.driver.onEvent) {
				this.driver.onEvent(data);
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
		if (this.driver) {
			this.driver.destroyNativeView?.();
		}
	}

	[dataProperty.setNative](data: any) {
		this.updateData(data);
	}

	updateData(data: Record<string, any>) {
		this.driver?.updateData?.(data);
	}
}
