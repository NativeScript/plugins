// import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, IterableDiffers, AfterContentInit, OnDestroy, NgZone } from '@angular/core';
// import { PickerField } from '@nativescript/picker';
// import { PickerValueAccessor } from './picker.accessors';
// import { EventData, View } from '@nativescript/core';

// @Component({
// 	selector: 'PickerField',
// 	template: ` <DetachedContainer>
// 		<Placeholder #loader></Placeholder>
// 	</DetachedContainer>`,
// 	changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class PickerFieldComponent implements AfterContentInit {
// 	private _className: string;

// 	public get nativeElement(): PickerField {
// 		return this.templatedItemsView;
// 	}

// 	public get className(): string {
// 		return this._className;
// 	}

// 	protected templatedItemsView: PickerField;

// 	constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers, _ngZone: NgZone) {
// 		_elementRef.nativeElement.on('loaded', (ev: EventData) => {
// 			this.nativeElement.on('classNameChange', this.onClassNameChange.bind(this));
// 		});
// 	}

// 	ngOnDestroy() {
// 		if (this.nativeElement) {
// 			this.nativeElement.off('classNameChange', this.onClassNameChange.bind(this));
// 		}
// 	}

// 	private onClassNameChange(args) {
// 		this._className = (<View>args.object).className;
// 	}
// }

import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, IterableDiffers, NgZone } from '@angular/core';
import { ListViewComponent, TEMPLATED_ITEMS_COMPONENT } from '@nativescript/angular';
import { PickerValueAccessor } from './picker.accessors';

@Component({
	selector: 'PickerField',
	template: `<DetachedContainer>
		<ng-container #loader></ng-container>
	</DetachedContainer>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{ provide: TEMPLATED_ITEMS_COMPONENT, useExisting: forwardRef(() => PickerFieldComponent) }],
	standalone: false,
})
export class PickerFieldComponent extends ListViewComponent implements AfterContentInit {
	constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers, _cdRef: ChangeDetectorRef) {
		super(_elementRef, _iterableDiffers, _cdRef);
	}
}

export const DIRECTIVES = [PickerFieldComponent, PickerValueAccessor];
