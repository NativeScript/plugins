/**
 * Focus helper specifically for {N} plugin development workspaces
 */
const { exec } = require('child_process');
const cmdArguments = process.argv.slice(2);
const packages = [];

const focusOnPackages = function(packages) {
  exec(`nx g @nstudio/focus:mode ${packages.join(',')}`, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
      return;
    } 
    if (stderr) {
     console.log(`${stderr}`);
    }
    console.log(`${stdout}`);
  });
}

for (const p of cmdArguments) {
  const names = p.split(',').map(n => n.trim());
  console.log(names)
  for (const n of names) {
    if (n) {
      packages.push(n)
    }
  }
}
if (packages.length) {
  // console.log(packages)
  
  focusOnPackages(packages);
} else {
  // reset
  focusOnPackages([]);
}