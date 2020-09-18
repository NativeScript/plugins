export default function (hookArgs: any) {
  if (hookArgs.liveSyncData && !hookArgs.liveSyncData.bundle) {
    return (args, originalMethod) => {
      return originalMethod(...args).then(originalPatterns => {
        const projectData: IProjectData = hookArgs.projectData;
        const appResourcesRelativeDirectoryPath = projectData.getAppResourcesRelativeDirectoryPath();

        originalPatterns.push(`!${appResourcesRelativeDirectoryPath}/Android/values/strings.xml`);
        originalPatterns.push(`!${appResourcesRelativeDirectoryPath}/Android/values-*/strings.xml`);
        originalPatterns.push(`!${appResourcesRelativeDirectoryPath}/Android/src/main/res/values/strings.xml`);
        originalPatterns.push(`!${appResourcesRelativeDirectoryPath}/Android/src/main/res/values-*/strings.xml`);
        originalPatterns.push(`!${appResourcesRelativeDirectoryPath}/iOS/*.lproj/InfoPlist.strings`);
        originalPatterns.push(`!${appResourcesRelativeDirectoryPath}/iOS/*.lproj/Localizable.strings`);

        return originalPatterns;
      });
    };
  }
};
