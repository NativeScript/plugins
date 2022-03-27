export function dateTimeLabelFormatsHandler(dateTimeLabelFormatsOptions) {
	const dateTimeLabelFormats = new com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats();

	if (dateTimeLabelFormatsOptions.day) {
		const day = new com.highsoft.highcharts.common.hichartsclasses.HIDay();
		day.setMain(dateTimeLabelFormatsOptions.day);

		dateTimeLabelFormats.setDay(day);
	}

	if (dateTimeLabelFormatsOptions.hour) {
		const hour = new com.highsoft.highcharts.common.hichartsclasses.HIHour();
		hour.setMain(dateTimeLabelFormatsOptions.hour);

		dateTimeLabelFormats.setHour(hour);
	}

	if (dateTimeLabelFormatsOptions.millisecond) {
		const millisecond = new com.highsoft.highcharts.common.hichartsclasses.HIMillisecond();
		millisecond.setMain(dateTimeLabelFormatsOptions.millisecond);

		dateTimeLabelFormats.setMillisecond(millisecond);
	}

	if (dateTimeLabelFormatsOptions.minute) {
		const minute = new com.highsoft.highcharts.common.hichartsclasses.HIMinute();
		minute.setMain(dateTimeLabelFormatsOptions.minute);

		dateTimeLabelFormats.setMinute(minute);
	}

	if (dateTimeLabelFormatsOptions.month) {
		const month = new com.highsoft.highcharts.common.hichartsclasses.HIMonth();
		month.setMain(dateTimeLabelFormatsOptions.month);

		dateTimeLabelFormats.setMonth(month);
	}

	if (dateTimeLabelFormatsOptions.second) {
		const second = new com.highsoft.highcharts.common.hichartsclasses.HISecond();
		second.setMain(dateTimeLabelFormatsOptions.second);

		dateTimeLabelFormats.setSecond(second);
	}

	if (dateTimeLabelFormatsOptions.week) {
		const week = new com.highsoft.highcharts.common.hichartsclasses.HIWeek();
		week.setMain(dateTimeLabelFormatsOptions.week);

		dateTimeLabelFormats.setWeek(week);
	}

	if (dateTimeLabelFormatsOptions.year) {
		const year = new com.highsoft.highcharts.common.hichartsclasses.HIYear();
		year.setMain(dateTimeLabelFormatsOptions.year);

		dateTimeLabelFormats.setYear(year);
	}

	return dateTimeLabelFormats;
}
