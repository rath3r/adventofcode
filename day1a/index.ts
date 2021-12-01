import fs from 'fs';

const inputData = fs.readFileSync('./input-short.txt','utf8');

let values = inputData.split("\n");

let countPlus = 0;
values.forEach((el, i, arr) => {
    console.log(i);
    console.log('previous: ' + arr[i - 1]);
    console.log('current: ' + el);
    
    if (el > arr[i - 1]) {
        
        console.log('increase');
        countPlus++;
    }
});

console.log('----');
console.log(countPlus);
console.log(values.length);
