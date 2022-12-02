import * as fs from 'fs';

const inputData = fs.readFileSync('./day2/input-short.txt','utf8');

let values = inputData.split("\n");

// A X rock = 1
// B Y paper = 2
// C Z scissors = 3
// 0 lost
// 3 draw
// 6 win
let results:any = {
    'A Y': 8,
    'A X': 4,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C Z': 6,
    'C Y': 2,
    'C X': 7
};
let score:any = [];
values.forEach((el, i, arr) => {
    if(el !== ''){
        score.push(results[el]);
    }
});

console.log(score);
console.log(score.reduce((accumulator:any, currentValue:any) => accumulator + currentValue,0));

