import { ConverterCommon } from './converter.common';
import { ConverterIOS, ConverterAndroid } from './converter';
import { DataProvider } from './data.provider';

export = function (androidResourcesMigrationService: IAndroidResourcesMigrationService, logger: ILogger, projectData: IProjectData, injector: IInjector, hookArgs: any) {
	const platformName = ((hookArgs && hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.platform) || '').toLowerCase();

	projectData = hookArgs && (hookArgs.projectData || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.projectData));

	const platformData = getPlatformData(hookArgs && hookArgs.platformData, projectData, platformName, injector);
	let converter: ConverterCommon;
	const dataProvider = new DataProvider(logger, projectData);

	if (platformName === 'android') {
		converter = new ConverterAndroid(dataProvider, logger, platformData, projectData, androidResourcesMigrationService);
	} else if (platformName === 'ios') {
		converter = new ConverterIOS(dataProvider, logger, platformData, projectData);
	} else {
		logger.warn(`Platform '${platformName}' isn't supported: skipping localization`);
		return;
	}

	converter.run();
};

function getPlatformData(platformData: IPlatformData, projectData: IProjectData, platform: string, injector: IInjector): IPlatformData {
	if (!platformData) {
		// Used in CLI 5.4.x and below:
		const platformsData = injector.resolve<IPlatformsData>('platformsData');
		platformData = platformsData.getPlatformData(platform, projectData);
	}

	return platformData;
}
