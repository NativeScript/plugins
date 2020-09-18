/*
 * This code is based on the Twine code from Mobiata: https://github.com/mobiata/twine
 *
 * Twine Software License Agreement (BSD License)
 *
 * Copyright (c) 2012, Mobiata, LLC
 * All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, with or
 * without modification, are permitted provided that the following conditions are
 * met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of the organization nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

const flagsWidthPrecisionLength = '([-+0#])?(\\d+|\\*)?(\\.(\\d+|\\*))?(hh?|ll?|L|z|j|t|q)?';
const parameterFlagsWidthPrecisionLength = `(\\d+\\$)?${flagsWidthPrecisionLength}`;
const types = '[diufFeEgGxXoscpaA]';

function replacePlaceholder(find: RegExp, replace: Function, subject: string): string {
	let match = null;
	while (null !== (match = find.exec(subject))) {
		const previousString = subject.substring(0, match.index);
		if (isEndingWithPercentSign(previousString)) {
			continue;
		}
		const replacedString = replace(...match);
		find.lastIndex += replacedString.length - match[0].length;
		subject = previousString + replacedString + subject.substring(match.index + match[0].length);
	}
	return subject;
}

function isEndingWithPercentSign(subject: string): boolean {
	return /(?:^|[^%])(?:%%)*%$/.test(subject);
}

export function convertPlaceholders(subject: string): string {
	return numberPlaceholders(escapeSinglePercentSign(subject));
}

export function convertAtSignToStringSign(subject: string): string {
	return replacePlaceholder(new RegExp(`(%${parameterFlagsWidthPrecisionLength})@`, 'g'), (_, $1) => `${$1}s`, subject);
}

export function convertStringSignToAtSign(subject: string): string {
	return replacePlaceholder(new RegExp(`(%${parameterFlagsWidthPrecisionLength})s`, 'g'), (_, $1) => `${$1}@`, subject);
}

export function escapeSinglePercentSign(subject: string): string {
	return subject.replace(new RegExp(`(^|[^%])(%)(?!(%|${parameterFlagsWidthPrecisionLength}${types}))`, 'g'), '$1%%');
}

export function numberPlaceholders(subject: string): string {
	let index = 0;
	return replacePlaceholder(new RegExp(`%(${flagsWidthPrecisionLength}${types})`, 'g'), (_, $1) => `%${++index}$${$1}`, subject);
}
