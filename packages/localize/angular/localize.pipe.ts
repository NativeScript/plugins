import { Pipe, PipeTransform } from '@angular/core';

import { localize } from '@nativescript/localize';

@Pipe({ name: 'L', standalone: false })
export class LocalizePipe implements PipeTransform {
	public transform(key: string, ...args: string[]): string {
		return localize(key, ...args);
	}
}
