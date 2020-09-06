export var NUMERIC: string;
export var LONG: string;
export var SHORT: string;
export var TWODIGIT: string;
export var FULL: string;
export interface DateTimeFormatOptions {
    weekday?: string;
    era?: string;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    timeZoneName?: string;
    hour12?: boolean;
}

export class DateTimeFormat {
    constructor(locale?: string, options?: DateTimeFormatOptions, pattern?: string);
    format(date?: Date): string;
}

export interface NumberFormatOptions {
    style?: string;
    currency?: string;
    currencyDisplay?: string;
    useGrouping?: boolean;
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}

export class NumberFormat {
    constructor(locale?: string, options?: NumberFormatOptions, pattern?: string);
    format(value: number): string;
}
