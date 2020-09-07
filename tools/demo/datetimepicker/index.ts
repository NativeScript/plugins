import { EventData, ScrollView, Button } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import { DateTimePicker } from '@nativescript/datetimepicker';

export class DemoSharedDatetimepicker extends DemoSharedBase {
  dateText = 'tap to select date';
  timeText = 'tap to select time';
  dateTimeText = 'tap to select date and time';
  dateTime1 = new Date();
  dateTime2 = new Date();
  dateTime3 = new Date();
	private scrollView: ScrollView;

	constructor() {
		super();
		// this.set('dateText', 'tap to select date');
		// this.set('timeText', 'tap to select time');
		// this.set('dateTimeText', 'tap to select date and time');
		// this.set('dateTime1', new Date());
		// this.set('dateTime2', new Date());
		// this.set('dateTime3', new Date());
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
				this.set('dateText', this.getFormattedDate(selectedDate));
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
				this.set('timeText', this.getFormattedTime(selectedTime));
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
						this.set('dateTimeText', this.getFormattedDate(selectedDateTime) + ' ' + this.getFormattedTime(selectedDateTime));
					}
				});
			}
		});
	}

	scrollViewLoaded(args: EventData): void {
		this.scrollView = <ScrollView>args.object;
	}

	onHeaderTap(args: EventData): void {
		const buttonId = (<Button>args.object).id;
		const isCurrentlyExpanded = this.get(buttonId + 'Visibility') === 'visible';
		if (isCurrentlyExpanded) {
			this.expandCollapse(null);
		} else {
			this.expandCollapse(buttonId);
		}
		this.scrollView.scrollToVerticalOffset(0, false);
	}

	expandCollapse(expandId: string): void {
		this.set('dateOpacity', expandId === 'date' ? 0.7 : 1);
		this.set('dateVisibility', expandId === 'date' ? 'visible' : 'collapse');

		this.set('timeOpacity', expandId === 'time' ? 0.7 : 1);
		this.set('timeVisibility', expandId === 'time' ? 'visible' : 'collapse');

		this.set('dateTimeOpacity', expandId === 'dateTime' ? 0.7 : 1);
		this.set('dateTimeVisibility', expandId === 'dateTime' ? 'visible' : 'collapse');

		this.set('customOpacity', expandId === 'custom' ? 0.7 : 1);
		this.set('customVisibility', expandId === 'custom' ? 'visible' : 'collapse');
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
