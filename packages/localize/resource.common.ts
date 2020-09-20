import * as shorthash from 'shorthash';

export function encodeKey(key: string): string {
	return key.match(/^[_a-zA-Z]\w*$/) ? key : `_${key.replace(/[^\w]/g, '_')}_${shorthash.unique(key)}`;
}

export function replace(find: string[], replace: string[], subject: string): string {
	return subject.replace(new RegExp('(' + find.map((i) => i.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')).join('|') + ')', 'g'), (match) => replace[find.indexOf(match)]);
}
