interface IAndroidResourcesMigrationService {
	canMigrate(platformString: string): boolean;
	hasMigrated(appResourcesDir: string): boolean;
	migrate(appResourcesDir: string): Promise<void>;
}

interface ILogger {
	initialize(opts?: any): void;
	initializeCliLogger(): void;
	getLevel(): string;
	fatal(formatStr?: any, ...args: any[]): void;
	error(formatStr?: any, ...args: any[]): void;
	warn(formatStr?: any, ...args: any[]): void;
	info(formatStr?: any, ...args: any[]): void;
	debug(formatStr?: any, ...args: any[]): void;
	trace(formatStr?: any, ...args: any[]): void;
	printMarkdown(...args: any[]): void;
	prepare(item: any): string;
	isVerbose(): boolean;
}

interface IPlatformData {
	frameworkPackageName: string;
	platformProjectService: IPlatformProjectService;
	projectRoot: string;
	normalizedPlatformName: string;
	platformNameLowerCase: string;
	appDestinationDirectoryPath: string;
	frameworkFilesExtensions: string[];
	frameworkDirectoriesExtensions?: string[];
	frameworkDirectoriesNames?: string[];
	targetedOS?: string[];
	configurationFileName?: string;
	configurationFilePath?: string;
	relativeToFrameworkConfigurationFilePath: string;
	fastLivesyncFileExtensions: string[];
}

interface IPlatformsData {
	availablePlatforms: any;
	platformsNames: string[];
	getPlatformData(platform: string, projectData: IProjectData): IPlatformData;
}

interface IPlatformProjectService {
	getAppResourcesDestinationDirectoryPath(projectData: IProjectData): string;
}

interface IProjectData {
	projectDir: string;
	projectName: string;
	platformsDir: string;
	projectFilePath: string;
	projectId?: string;
	dependencies: any;
	appDirectoryPath: string;
	appResourcesDirectoryPath: string;
	projectType: string;
	nsConfig: any;
	androidManifestPath: string;
	appGradlePath: string;
	gradleFilesDirectoryPath: string;
	infoPlistPath: string;
	buildXcconfigPath: string;
	getAppDirectoryPath(projectDir?: string): string;
	getAppDirectoryRelativePath(): string;
	getAppResourcesDirectoryPath(projectDir?: string): string;
	getAppResourcesRelativeDirectoryPath(): string;
}

interface IPlatformsDataService {
	getPlatformData(platform: string, projectData: IProjectData): IPlatformData;
}

interface IInjector {
	resolve<T>(name: string, ctorArguments?: any): any;
}
