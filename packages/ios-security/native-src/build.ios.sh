#!/bin/sh

echo "Set exit on simple errors"
set -e

echo "Use dumb terminal"
export TERM=dumb

rm -rf ../platforms/ios || true
mkdir -p ../platforms/ios

echo "Build iOS"

cd ios
./build.sh
cd ..
echo "Copy ios/build/*.xcframework platforms/ios"

cp -R ios/build/NativeScriptIOSSecurity.xcframework ../platforms/ios

# cp ios/build/*.framework.dSYM.zip dist/package/platforms/ios
