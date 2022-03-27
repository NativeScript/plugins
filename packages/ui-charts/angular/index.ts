import { Directive, ElementRef, Inject, Input, NgModule, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { EventData } from '@nativescript/core';
import { UIChartsView } from '@nativescript/ui-charts';

@Directive({
	selector: 'UIChartsView',
})
export class UIChartsViewDirective implements OnChanges {
	private _uiChartsView: UIChartsView = null;
	private _chartViewLoaded = false;

	@Input() options: any = null;
	@Input() langOptions: any = null;
	@Input() updateChartContent = false;
	//////////////////////////////////////////////////////////////////////////////////////////////////
	constructor(@Inject(ElementRef) el: ElementRef) {
		this._uiChartsView = el.nativeElement;
		this._uiChartsView.on('loaded', this.onChartViewLoaded.bind(this));
	}

	onChartViewLoaded(args: EventData) {
		this._chartViewLoaded = true;
		this.setChartViewOptions();
	}

	ngOnChanges(changes: SimpleChanges) {
		for (const propName in changes) {
			if (changes.hasOwnProperty(propName)) {
				switch (propName) {
					case 'options':
						if (changes.options.currentValue) {
							this.options = changes.options.currentValue;
							if (this._chartViewLoaded) {
								this.setChartViewOptions();
							}
						}
						break;
					case 'langOptions':
						if (changes.langOptions.currentValue) {
							this.langOptions = changes.langOptions.currentValue;
							if (this._chartViewLoaded) {
								this._uiChartsView.setLangOptions(this.langOptions);
							}
						}
						break;
					case 'updateChartContent':
						if (changes.updateChartContent) {
							this.updateChartContent = changes.updateChartContent.currentValue === 'true';
						}
						break;
				}
			}
		}
	}

	private setChartViewOptions() {
		if (this.options && this._uiChartsView) {
			if (!(<any>this._uiChartsView)._chartInitialized) {
				this._uiChartsView.setOptions(this.options);
			} else {
				if (this.updateChartContent) {
					this._uiChartsView.updateOptions(this.options);
				} else {
					this._uiChartsView.setOptions(this.options);
				}
			}
		}
	}
}

@NgModule({
	declarations: [UIChartsViewDirective],
	exports: [UIChartsViewDirective],
})
export class UIChartsViewModule {}

registerElement('UIChartsView', () => UIChartsView);
