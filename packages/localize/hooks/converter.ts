import * as fs from 'fs';
import * as path from 'path';
import * as plist from 'simple-plist';

import { ConverterCommon } from './converter.common';
import { DataProvider, I18nEntries, Languages } from './data.provider';

import * as shorthash from 'shorthash';

const flagsWidthPrecisionLength = '([-+0#])?(\\d+|\\*)?(\\.(\\d+|\\*))?(hh?|ll?|L|z|j|t|q)?';
const parameterFlagsWidthPrecisionLength = `(\\d+\\$)?${flagsWidthPrecisionLength}`;
const types = '[diufFeEgGxXoscpaA]';

const isEndingWithPercentSign = function (subject: string): boolean {
	return /(?:^|[^%])(?:%%)*%$/.test(subject);
};

const encodeKey = function (key: string): string {
	return key.match(/^[_a-zA-Z]\w*$/) ? key : `_${key.replace(/[^\w]/g, '_')}_${shorthash.unique(key)}`;
};

const replace = function (find: string[], replace: string[], subject: string): string {
	return subject.replace(new RegExp('(' + find.map((i) => i.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')).join('|') + ')', 'g'), (match) => replace[find.indexOf(match)]);
};

const convertPlaceholders = function (subject: string): string {
	return numberPlaceholders(escapeSinglePercentSign(subject));
};

const numberPlaceholders = function (subject: string): string {
	let index = 0;
	return replacePlaceholder(new RegExp(`%(${flagsWidthPrecisionLength}${types})`, 'g'), (_, $1) => `%${++index}$${$1}`, subject);
};

const escapeSinglePercentSign = function (subject: string): string {
	return subject.replace(new RegExp(`(^|[^%])(%)(?!(%|${parameterFlagsWidthPrecisionLength}${types}))`, 'g'), '$1%%');
};

const convertStringSignToAtSign = function (subject: string): string {
	return replacePlaceholder(new RegExp(`(%${parameterFlagsWidthPrecisionLength})s`, 'g'), (_, $1) => `${$1}@`, subject);
};

const replacePlaceholder = function (find: RegExp, replace: Function, subject: string): string {
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
};

export class ConverterAndroid extends ConverterCommon {
	public constructor(dataProvider: DataProvider, logger: ILogger, platformData: IPlatformData, projectData: IProjectData, androidResourcesMigrationService: IAndroidResourcesMigrationService) {
		super(dataProvider, logger, platformData, projectData);
		if (androidResourcesMigrationService.hasMigrated(projectData.appResourcesDirectoryPath)) {
			this.appResourcesDirectoryPath = path.join(this.appResourcesDirectoryPath, 'src', 'main', 'res');
		}
	}

	encodeValue(value: string): string {
		return '"' + replace(["'", '"', '\\', '\n', '\r', '\t', '<', '&'], ["\\'", '\\"', '\\\\', '\\n', '\\r', '\\t', '&lt;', '&amp;'], convertPlaceholders(value)) + '"';
	}

	protected cleanObsoleteResourcesFiles(resourcesDirectory: string, languages: Languages): this {
		fs.readdirSync(resourcesDirectory)
			.filter((fileName) => {
				const match = /^values-(.+)$/.exec(fileName);
				return match && !languages.has(match[1].replace(/^(.+?)-r(.+?)$/, '$1-$2'));
			})
			.map((fileName) => {
				return path.join(resourcesDirectory, fileName);
			})
			.filter((filePath) => {
				return fs.statSync(filePath).isDirectory();
			})
			.forEach((lngResourcesDir) => {
				const resourceFilePath = path.join(lngResourcesDir, 'strings.xml');
				this.removeFileIfExists(resourceFilePath);
				this.removeDirectoryIfEmpty(lngResourcesDir);
			});
		return this;
	}

	protected createLanguageResourcesFiles(language: string, isDefaultLanguage: boolean, i18nEntries: I18nEntries): this {
		const languageResourcesDir = path.join(this.appResourcesDirectoryPath, `values${isDefaultLanguage ? '' : `-${language.replace(/^(.+?)-(.+?)$/, '$1-r$2')}`}`);
		this.createDirectoryIfNeeded(languageResourcesDir);
		let strings = '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n';
		this.encodeI18nEntries(i18nEntries).forEach((encodedValue, encodedKey) => {
			strings += `  <string name="${encodedKey}">${encodedValue}</string>\n`;
		});
		strings += '</resources>\n';
		const resourceFilePath = path.join(languageResourcesDir, 'strings.xml');
		this.writeFileSyncIfNeeded(resourceFilePath, strings);
		return this;
	}

	private encodeI18nEntries(i18nEntries: I18nEntries): I18nEntries {
		const encodedI18nEntries: I18nEntries = new Map();
		i18nEntries.forEach((value, key) => {
			const encodedKey = encodeKey(key);
			const encodedValue = this.encodeValue(value);
			encodedI18nEntries.set(encodedKey, encodedValue);
			if (key === 'app.name') {
				encodedI18nEntries.set('app_name', encodedValue);
				encodedI18nEntries.set('title_activity_kimera', encodedValue);
			}
		});
		return encodedI18nEntries;
	}
}

export class ConverterIOS extends ConverterCommon {
	encodeValue(value: string): string {
		return replace(['"', '\\', '\n', '\r', '\t'], ['\\"', '\\\\', '\\n', '\\r', '\\t'], convertStringSignToAtSign(convertPlaceholders(value)));
	}

	protected cleanObsoleteResourcesFiles(resourcesDirectory: string, languages: Languages): this {
		fs.readdirSync(resourcesDirectory)
			.filter((fileName) => {
				const match = /^(.+)\.lproj$/.exec(fileName);
				return match && !languages.has(match[1]);
			})
			.map((fileName) => {
				return path.join(resourcesDirectory, fileName);
			})
			.filter((filePath) => {
				return fs.statSync(filePath).isDirectory();
			})
			.forEach((lngResourcesDir) => {
				['InfoPlist.strings', 'Localizable.strings'].forEach((fileName) => {
					const resourceFilePath = path.join(lngResourcesDir, fileName);
					this.removeFileIfExists(resourceFilePath);
				});
				this.removeDirectoryIfEmpty(lngResourcesDir);
			});
		return this;
	}

	protected createLanguageResourcesFiles(language: string, isDefaultLanguage: boolean, i18nEntries: I18nEntries): this {
		const infoPlistStrings: I18nEntries = new Map();
		i18nEntries.forEach((value, key) => {
			if (key === 'app.name') {
				infoPlistStrings.set('CFBundleDisplayName', value);
			} else if (key.startsWith('ios.info.plist.')) {
				infoPlistStrings.set(key.substr(15), value);
			}
		});
		const languageResourcesDir = path.join(this.appResourcesDirectoryPath, `${language}.lproj`);
		this.createDirectoryIfNeeded(languageResourcesDir).writeStrings(languageResourcesDir, 'Localizable.strings', i18nEntries).writeStrings(languageResourcesDir, 'InfoPlist.strings', infoPlistStrings);
		if (isDefaultLanguage) {
			infoPlistStrings.set('CFBundleDevelopmentRegion', language);
			this.writeInfoPlist(infoPlistStrings);
		}
		return this;
	}

	private encodeI18nEntries(i18nEntries: I18nEntries): I18nEntries {
		const encodedI18nEntries: I18nEntries = new Map();
		i18nEntries.forEach((value, key) => {
			const encodedKey = encodeKey(key);
			const encodedValue = this.encodeValue(value);
			encodedI18nEntries.set(encodedKey, encodedValue);
		});
		return encodedI18nEntries;
	}

	private writeStrings(languageResourcesDir: string, resourceFileName: string, i18nEntries: I18nEntries): this {
		let content = '';
		this.encodeI18nEntries(i18nEntries).forEach((encodedValue, encodedKey) => {
			content += `"${encodedKey}" = "${encodedValue}";\n`;
		});
		const resourceFilePath = path.join(languageResourcesDir, resourceFileName);
		this.writeFileSyncIfNeeded(resourceFilePath, content);
		return this;
	}

	private writeInfoPlist(infoPlistValues: I18nEntries) {
		const resourceFilePath = path.join(this.appResourcesDirectoryPath, 'Info.plist');
		if (!fs.existsSync(resourceFilePath)) {
			this.logger.warn(`'${resourceFilePath}' doesn't exists: unable to set default language`);
			return this;
		}
		const data = plist.readFileSync(resourceFilePath);
		let resourceChanged = false;
		infoPlistValues.forEach((value, key) => {
			if (!data.hasOwnProperty(key) || data[key] !== value) {
				data[key] = value;
				resourceChanged = true;
			}
		});
		if (resourceChanged) {
			plist.writeFileSync(resourceFilePath, data);
		}
	}
}
