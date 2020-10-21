module.exports = function(hookArgs, $projectData) {
    if ($projectData.$options.argv.detox){
        console.log("Detox build enabled.")
        hookArgs.args.unshift('assembleAndroidTest')
        hookArgs.args.push('-DtestBuildType=debug')
    }
}