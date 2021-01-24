#!/usr/bin/env node

var spawn = require('child_process').spawn;
function shspawn(command) {
	spawn('sh', ['-c', command], { stdio: 'inherit' });
}

shspawn('adb shell settings put global window_animation_scale 1');
shspawn('adb shell settings put global transition_animation_scale 1');
shspawn('adb shell settings put global animator_duration_scale 1');
