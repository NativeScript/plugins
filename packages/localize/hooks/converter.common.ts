import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';

import { DataProvider, I18nEntries, Languages } from './data.provider';

export abstract class ConverterCommon {
	protected appResourcesDirectoryPath?: string;

	protected readonly appResourcesDestinationDirectoryPath?: string;
	protected readonly i18nDirectoryPath?: string;

	public constructor(protected dataProvider: DataProvider, protected logger: ILogger, protected platformData: IPlatformData, protected projectData: IProjectData) {
		this.appResourcesDirectoryPath = path.join(projectData.appResourcesDirectoryPath, platformData.normalizedPlatformName);
		this.appResourcesDestinationDirectoryPath = platformData.platformProjectService.getAppResourcesDestinationDirectoryPath(projectData);
		this.i18nDirectoryPath = path.join(projectData.appDirectoryPath, 'i18n');
	}

	protected abstract cleanObsoleteResourcesFiles(resourcesDirectory: string, languages: Languages): this;

	protected abstract createLanguageResourcesFiles(language: string, isDefaultLanguage: boolean, i18nEntries: I18nEntries): this;

	public run(): this {
		this.dataProvider.getLanguages().forEach((languageI18nEntries, language) => {
			this.createLanguageResourcesFiles(language, language === this.dataProvider.getDefaultLanguage(), languageI18nEntries);
		});
		if (fs.existsSync(this.appResourcesDirectoryPath) && fs.statSync(this.appResourcesDirectoryPath).isDirectory()) {
			this.cleanObsoleteResourcesFiles(this.appResourcesDirectoryPath, this.dataProvider.getLanguages());
		}
		return this;
	}

	protected createDirectoryIfNeeded(directoryPath: string): this {
		if (!fs.existsSync(directoryPath) || !fs.statSync(directoryPath).isDirectory()) {
			mkdirp.sync(directoryPath);
		}
		return this;
	}

	protected removeDirectoryIfEmpty(directoryPath: string): this {
		try {
			fs.rmdirSync(directoryPath);
		} catch (error) {}
		return this;
	}

	protected removeFileIfExists(filePath: string): this {
		try {
			fs.unlinkSync(filePath);
		} catch (error) {}
		return this;
	}

	protected writeFileSyncIfNeeded(filePath: string, content: string): this {
		try {
			if (content === fs.readFileSync(filePath, 'utf8')) {
				return this;
			}
		} catch (error) {}
		fs.writeFileSync(filePath, content, { encoding: 'utf8' });
		return this;
	}
}
