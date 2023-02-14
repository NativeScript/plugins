import { Utils } from '@nativescript/core';
import type { IJetpackComposeProvider, RegistryCallback } from '.';
import { BaseComposeDataDriver, dataProperty, JetpackComposeCommon, JetpackComposeEvents } from './common';
export * from './common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const kotlin: any;
const registry = new Map<string, RegistryCallback>();
export function registerJetpackCompose(id: string, callback: RegistryCallback) {
	registry.set(id, callback);
}

export class ComposeDataDriver extends BaseComposeDataDriver<JetpackCompose> {
	constructor(private jetpackComposeProvider: IJetpackComposeProvider, owner: JetpackCompose) {
		super(owner);
	}
	renderInNativeView(composeView: androidx.compose.ui.platform.ComposeView) {
		this.jetpackComposeProvider.generateComposeView(composeView);
	}
	registerEvents(callback): void {
		// TODO: make this use a standardized interface
		this.jetpackComposeProvider.onEvent = new kotlin.jvm.functions.Function1({
			invoke: (data) => {
				callback(data);
			},
		});
	}
	updateData(data) {
		this.jetpackComposeProvider.updateData(Utils.dataSerialize({ data }));
	}
	onEvent(data) {
		const owner = this.owner.get();
		if (owner) {
			owner.notify({
				eventName: JetpackComposeEvents.composeEvent,
				data: Utils.dataDeserialize(data),
			});
		}
	}
}

export class JetpackCompose extends JetpackComposeCommon {
	driver: BaseComposeDataDriver;

	createNativeView() {
		const generator = registry.get(this.composeId);

		if (!generator) {
			console.warn('view not registered:', this.composeId);
			return super.createNativeView();
		}
		// TODO: resolve typings conflict between .d.ts and JetpackCompose
		this.driver = generator(this as any) as any;
		const composeView = new androidx.compose.ui.platform.ComposeView(this._context);
		this.driver.renderInNativeView(composeView);
		return composeView;
	}

	initNativeView(): void {
		super.initNativeView();

		if (!this.driver) {
			return;
		}

		this.driver.registerEvents((data) => {
			if (this.driver.onEvent) {
				this.driver.onEvent(data);
			} else {
				this.notify({
					eventName: JetpackComposeEvents.composeEvent,
					data,
				});
			}
		});
	}

	[dataProperty.setNative](data: unknown) {
		this.updateData(data);
	}

	updateData(data: unknown) {
		this.driver?.updateData?.(data);
	}
}
