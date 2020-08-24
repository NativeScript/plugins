if [ ! -d "../../dist/packages/imagepicker" ]
then
     echo -e "n\n" | ../../node_modules/.bin/nx run all:build
else
     echo "OK"	
fi