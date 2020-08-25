import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { DateTimePicker } from '@nativescript/datetimepicker';
import { EventData, Button } from '@nativescript/core';

@Component({
	selector: 'demo-datetimepicker',
	templateUrl: 'datetimepicker.component.html',
	styles: [
		`
			.content {
				font-size: 16;
				font-weight: bold;
				margin-top: 12;
				margin-bottom: 6;
				color: #303f9f;
			}

			.header {
				font-size: 16;
				margin-top: 12;
				margin-bottom: 6;
				color: white;
				background-color: #2196f3;
				text-align: center;
			}

			label {
				padding: 6 4;
			}

			timepickerfield,
			datepickerfield {
				padding: 12 4;
			}

			timepickerfield.apply-css,
			datepickerfield.apply-css {
				color: #cddc39;
				background-color: #00796b;
				font-size: 20;
				font-weight: bold;
				padding: 20;
			}

			.date-time-picker.apply-css {
				color: #00796b;
				background-color: #cddc39;
			}

			.date-time-picker-spinners.apply-css {
				color: #cddc39;
				background-color: #00796b;
			}

			.date-time-picker-buttons.apply-css {
				color: #00796b;
			}
		`,
	],
})
export class DateTimePickerComponent {
	public dateText: string = 'tap to select date';
	public timeText: string = 'tap to select time';
	public dateTimeText: string = 'tap to select date and time';
	public dateTime1: Date = new Date();
	public dateTime2: Date = new Date();
	public dateTime3: Date = new Date();
	public dateOpacity: number;
	public timeOpacity: number;
	public dateTimeOpacity: number;
	public customOpacity: number;
	public dateVisibility: string;
	public timeVisibility: string;
	public dateTimeVisibility: string;
	public customVisibility: string;
	private _expandedId: string;

	@ViewChild('scrollView', { static: false }) scrollView: ElementRef;

	constructor(private _ngZone: NgZone) {
		// Use the component constructor to inject providers.
		this.expandCollapse(null);
	}

	onPickDateTap(args: EventData): void {
		const dateToday = new Date();
		const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
		const dateNextWeek = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 7);
		DateTimePicker.pickDate({
			context: (<Button>args.object)._context,
			date: dateTomorrow,
			minDate: dateTomorrow,
			maxDate: dateNextWeek,
			okButtonText: 'OK',
			cancelButtonText: 'Cancel',
			title: 'choose date',
			locale: 'en_GB',
		}).then((selectedDate: Date) => {
			if (selectedDate) {
				this.dateText = this.getFormattedDate(selectedDate);
			}
		});
	}

	onPickTimeTap(args: EventData): void {
		const dateToday = new Date();
		const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
		dateTomorrow.setHours(8);
		dateTomorrow.setMinutes(0);
		DateTimePicker.pickTime({
			context: (<Button>args.object)._context,
			time: dateTomorrow,
			okButtonText: 'OK',
			cancelButtonText: 'Cancel',
			title: 'choose time',
			locale: 'en_GB',
			is24Hours: true,
		}).then((selectedTime: Date) => {
			if (selectedTime) {
				this.timeText = this.getFormattedTime(selectedTime);
			}
		});
	}

	onPickDateTimeTap(args: EventData): void {
		const dateToday = new Date();
		DateTimePicker.pickDate({
			context: (<Button>args.object)._context,
			date: dateToday,
			title: 'choose date',
			locale: 'en_GB',
		}).then((selectedDate: Date) => {
			if (selectedDate) {
				DateTimePicker.pickTime({
					context: (<Button>args.object)._context,
					time: selectedDate,
					title: 'choose time',
					locale: 'en_GB',
				}).then((selectedDateTime: Date) => {
					if (selectedDateTime) {
						this.dateTimeText = this.getFormattedDate(selectedDateTime) + ' ' + this.getFormattedTime(selectedDateTime);
					}
				});
			}
		});
	}

	onHeaderTap(args: EventData): void {
		const buttonId = (<Button>args.object).id;
		const isCurrentlyExpanded = buttonId === this._expandedId;
		if (isCurrentlyExpanded) {
			this.expandCollapse(null);
		} else {
			this.expandCollapse(buttonId);
		}
		this.scrollView.nativeElement.scrollToVerticalOffset(0, false);
	}

	expandCollapse(expandId: string): void {
		this.dateOpacity = expandId === 'date' ? 0.7 : 1;
		this.dateVisibility = expandId === 'date' ? 'visible' : 'collapse';

		this.timeOpacity = expandId === 'time' ? 0.7 : 1;
		this.timeVisibility = expandId === 'time' ? 'visible' : 'collapse';

		this.dateTimeOpacity = expandId === 'dateTime' ? 0.7 : 1;
		this.dateTimeVisibility = expandId === 'dateTime' ? 'visible' : 'collapse';

		this.customOpacity = expandId === 'custom' ? 0.7 : 1;
		this.customVisibility = expandId === 'custom' ? 'visible' : 'collapse';

		this._expandedId = expandId;
	}

	getFormattedDate(date: Date): string {
		const d = date.getDate();
		const m = date.getMonth() + 1;
		const y = date.getFullYear();
		return (d < 10 ? '0' : '') + d + '.' + (m < 10 ? '0' : '') + m + '.' + y;
	}

	getFormattedTime(date: Date): string {
		const h = date.getHours();
		const m = date.getMinutes();
		return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
	}
}
