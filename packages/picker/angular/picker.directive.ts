import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, IterableDiffers, AfterContentInit, OnDestroy, NgZone } from '@angular/core';
import { PickerField } from '@nativescript/picker';
import { PickerValueAccessor } from './picker.accessors';
import { View } from '@nativescript/core';

@Component({
	selector: 'PickerField',
	template: ` <DetachedContainer>
		<Placeholder #loader></Placeholder>
	</DetachedContainer>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickerFieldComponent implements AfterContentInit {
	private _className: string;

	public get nativeElement(): PickerField {
		return this.templatedItemsView;
	}

	public get className(): string {
		return this._className;
	}

	protected templatedItemsView: PickerField;

	constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers, _ngZone: NgZone) {
		
	}

	ngAfterContentInit() {
		this.nativeElement.on('classNameChange', this.onClassNameChange.bind(this));
	}

	ngOnDestroy() {
		if (this.nativeElement) {
			this.nativeElement.off('classNameChange', this.onClassNameChange.bind(this));
		}
	}

	private onClassNameChange(args) {
		this._className = (<View>args.object).className;
	}
}

export const DIRECTIVES = [PickerFieldComponent, PickerValueAccessor];
