#!/bin/bash

if [ -z $1 ]; 
    then 
        echo "Day argument is unset";
    else
        echo "Setting up Day$1";
fi

if [ -d "src/day$1" ]; 
    then
        echo "Day$1 is already set up";
        exit 1;
fi

mkdir src/day$1;
touch src/day$1/day$1.ts
cp src/day6/index.ts src/day$1/index.ts
touch test/day$1.test.ts
touch src/day$1/input.txt

echo "Day$1 is set up";
exit 0;