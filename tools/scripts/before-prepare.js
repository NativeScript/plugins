'use strict'
var path = require('path');
var fs = require('fs');
 
module.exports = function (hookArgs, $logger, $projectData) {
    const platform = (hookArgs.platform || hookArgs.prepareData.platform).toLowerCase();
    // console.log('preparing platform:', platform);
    const packagePath = $projectData.projectFilePath;

    const ionicPortalName = 'ionicWebPortalSample';
    const configAppResourcesPath = path.join(packagePath, '../../../tools/assets', ionicPortalName);
    console.log('configAppResourcesPath:', configAppResourcesPath)
 
    return new Promise(function (resolve, reject) {
        try{
            //copy files
            const resourcesPath = path.join(packagePath, '../../../tools/assets/App_Resources', platform === 'ios' ? 'iOS' : 'Android/src/main/assets');
            const copyRecursive = (contents, subPath = '') => {
                contents.forEach( function ( contentPath ) {
                    const fullFilePath = path.join( configAppResourcesPath, subPath, contentPath );
                    // console.log('fullFilePath:', fullFilePath)
                    const filePath = fullFilePath.split('tools/assets')[1];
                    if ( fs.lstatSync( fullFilePath ).isDirectory() ) {
                        if (filePath) {
                            const copyToFolder = path.join(resourcesPath, filePath);
                            if ( !fs.existsSync( copyToFolder ) ) {
                                fs.mkdirSync( copyToFolder );
                            }
                        }
                        copyRecursive(fs.readdirSync( fullFilePath ), (subPath ? subPath + '/' : '') + contentPath);
                    } else {
                        const filePath = fullFilePath.split('tools/assets')[1];
                        if (filePath) {
                            const copyTo = path.join(resourcesPath, filePath);
                            // console.log('copy from:', fullFilePath);
                            // console.log('to:', copyTo)
                            fs.writeFileSync(copyTo, fs.readFileSync(fullFilePath));
                        } else {
                            copyRecursive(fs.readdirSync( fullFilePath ), contentPath);
                        }
                    }
                });
            };
            const portalFolderPath = path.join(resourcesPath, ionicPortalName);
            if ( !fs.existsSync( portalFolderPath ) ) {
                fs.mkdirSync( portalFolderPath );
            }
            const contents = fs.readdirSync( configAppResourcesPath );
            copyRecursive(contents);

            resolve();
        } catch (err) {
            reject(err)
        }
    }); 
};