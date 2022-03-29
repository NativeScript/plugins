'use strict';
var path = require('path');
var fs = require('fs');

module.exports = function (hookArgs, $logger, $projectData) {
	const platform = (hookArgs.platform || hookArgs.prepareData.platform).toLowerCase();
	// console.log('preparing platform:', platform);
	const packagePath = $projectData.projectFilePath;

	const ionicPortalName1 = 'ionicWebStart';
	const configAppResourcesPath1 = path.join(packagePath, '../../../tools/assets', ionicPortalName1);
	const ionicPortalName2 = 'ionicWebModal';
	const configAppResourcesPath2 = path.join(packagePath, '../../../tools/assets', ionicPortalName2);

	// console.log('configAppResourcesPath:', configAppResourcesPath1)

	return new Promise(function (resolve, reject) {
		try {
			//copy files
			const resourcesPath = path.join(packagePath, '../../../tools/assets/App_Resources', platform === 'ios' ? 'iOS' : 'Android/src/main/assets');
			const copyRecursive = (contents, subPath = '', ionicResourcePath = '') => {
				contents.forEach(function (contentPath) {
					const fullFilePath = path.join(ionicResourcePath, subPath, contentPath);
					// console.log('fullFilePath:', fullFilePath)
					const filePath = fullFilePath.split('tools/assets')[1];
					if (fs.lstatSync(fullFilePath).isDirectory()) {
						if (filePath) {
							const copyToFolder = path.join(resourcesPath, filePath);
							if (!fs.existsSync(copyToFolder)) {
								fs.mkdirSync(copyToFolder);
							}
						}
						copyRecursive(fs.readdirSync(fullFilePath), (subPath ? subPath + '/' : '') + contentPath, ionicResourcePath);
					} else {
						const filePath = fullFilePath.split('tools/assets')[1];
						if (filePath) {
							const copyTo = path.join(resourcesPath, filePath);
							// console.log('copy from:', fullFilePath);
							// console.log('to:', copyTo)
							fs.writeFileSync(copyTo, fs.readFileSync(fullFilePath));
						} else {
							copyRecursive(fs.readdirSync(fullFilePath), contentPath, ionicResourcePath);
						}
					}
				});
			};
			let portalFolderPath = path.join(resourcesPath, ionicPortalName1);
			if (!fs.existsSync(portalFolderPath)) {
				fs.mkdirSync(portalFolderPath);
			}
			portalFolderPath = path.join(resourcesPath, ionicPortalName2);
			if (!fs.existsSync(portalFolderPath)) {
				fs.mkdirSync(portalFolderPath);
			}
			let contents = fs.readdirSync(configAppResourcesPath1);
			copyRecursive(contents, '', configAppResourcesPath1);
			contents = fs.readdirSync(configAppResourcesPath2);
			copyRecursive(contents, '', configAppResourcesPath2);

			resolve();
		} catch (err) {
			reject(err);
		}
	});
};
