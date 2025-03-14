const ngPackage = require('ng-packagr');
const path = require('path');
const fs = require('fs-extra');
const { serializeJson, parseJson } = require('@nx/devkit');

const rootDir = path.resolve(path.join(__dirname, '..', '..'));
const nxConfigPath = path.resolve(path.join(rootDir, 'nx.json'));
const nxConfig = JSON.parse(fs.readFileSync(nxConfigPath));
const npmScope = nxConfig.npmScope;

const cmdArgs = process.argv.slice(2);
const packageName = cmdArgs[0];
const publish = cmdArgs[1] === 'publish';

const packagePath = path.join('packages', packageName, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath));
const npmPackageName = packageJson.name;
console.log(`Building ${npmPackageName}...${publish ? 'and publishing.' : ''}`);

// build angular package
function buildAngular() {
	ngPackage
		.ngPackagr()
		.forProject(path.join('packages', packageName, 'angular', 'ng-package.json'))
		.withTsConfig(path.join('packages', packageName, 'angular', 'tsconfig.angular.json'))
		.build()
		.then(() => {
			console.log(`${npmPackageName} angular built successfully.`);
			finishPreparation();
		})
		.catch((error) => {
			console.error(error);
			process.exit(1);
		});
}

// copy angular ng-packagr output to dist/packages/{name}
function copyAngularDist() {
	fs.copy(path.join('packages', packageName, 'angular', 'dist'), path.join('dist', 'packages', packageName, 'angular'))
		.then(() => {
			console.log(`${npmPackageName} angular built successfully.`);
			// buildNativeSrc();
			finishPreparation();
		})
		.catch((err) => console.error(err));
}

function cleanPackage() {
	// helps remove unwanted properties which may be added by other tooling
	const packageJsonPath = path.resolve(rootDir, 'dist', 'packages', packageName, 'package.json');
	let packageJson = fs.readFileSync(packageJsonPath, { encoding: 'utf-8' });
	if (packageJson) {
		packageJson = parseJson(packageJson);
		// we don't need module or type properties at the moment
		delete packageJson['module'];
		delete packageJson['type'];
		fs.writeFileSync(packageJsonPath, serializeJson(packageJson));

		const angularNpmIgnorePath = path.resolve(rootDir, 'dist', 'packages', packageName, 'angular', '.npmignore');
		// remove .npmignore as we don't need it in angular folder if found
		if (fs.existsSync(angularNpmIgnorePath)) {
			fs.unlinkSync(angularNpmIgnorePath);
		}
	}
}

function finishPreparation() {
	fs.copy(path.join('tools', 'assets', 'publishing'), path.join('dist', 'packages', packageName))
		.then(() => {
			cleanPackage();
			console.log(`${npmPackageName} ready to publish.`);
		})
		.catch((err) => console.error(err));
}

if (fs.existsSync(path.join(rootDir, 'packages', packageName, 'angular'))) {
	// package has angular specific src, build it first
	buildAngular();
} else {
	finishPreparation();
}
