import fs from 'fs';

const inputData = fs.readFileSync('./input.txt','utf8');

let values = inputData.split("\n");

const sums = new Array();

values.forEach((el, i, arr) => {
    let current:number = +arr[i];
    let next:number = +arr[i + 1];
    let oneAfter:number = +arr[i + 2];

    let sum = current + next + oneAfter;

    sums.push(sum);
});

let count = 0;
sums.forEach((el, i , arr) => {
    if (el > arr[i - 1]) {
        count++;
    }
});

console.log('----');
console.log(count);
