export function dateTimeLabelFormatsHandler(dateTimeLabelFormatsOptions) {
	const dateTimeLabelFormats = new HIDateTimeLabelFormats();

	if (dateTimeLabelFormatsOptions.day) {
		const day = new HIDay();
		day.main = dateTimeLabelFormatsOptions.day;

		dateTimeLabelFormats.day = day;
	}

	if (dateTimeLabelFormatsOptions.hour) {
		const hour = new HIHour();
		hour.main = dateTimeLabelFormatsOptions.hour;

		dateTimeLabelFormats.hour = hour;
	}

	if (dateTimeLabelFormatsOptions.millisecond) {
		const millisecond = new HIMillisecond();
		millisecond.main = dateTimeLabelFormatsOptions.millisecond;

		dateTimeLabelFormats.millisecond = millisecond;
	}

	if (dateTimeLabelFormatsOptions.minute) {
		const minute = new HIMinute();
		minute.main = dateTimeLabelFormatsOptions.minute;

		dateTimeLabelFormats.minute = minute;
	}

	if (dateTimeLabelFormatsOptions.month) {
		const month = new HIMonth();
		month.main = dateTimeLabelFormatsOptions.month;

		dateTimeLabelFormats.month = month;
	}

	if (dateTimeLabelFormatsOptions.second) {
		const second = new HISecond();
		second.main = dateTimeLabelFormatsOptions.second;

		dateTimeLabelFormats.second = second;
	}

	if (dateTimeLabelFormatsOptions.week) {
		const week = new HIWeek();
		week.main = dateTimeLabelFormatsOptions.week;

		dateTimeLabelFormats.week = week;
	}

	if (dateTimeLabelFormatsOptions.year) {
		const year = new HIYear();
		year.main = dateTimeLabelFormatsOptions.year;

		dateTimeLabelFormats.year = year;
	}

	return dateTimeLabelFormats;
}
