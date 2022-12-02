import * as fs from 'fs';

const inputData = fs.readFileSync('./day2/input-full.txt','utf8');

let values = inputData.split("\n");

// A rock = 1
// B paper = 2
// C scissors = 3
// 0 lost
// 3 draw
// 6 win
// X lose
// Y draw
// Z win
let results:any = {
    'A Y': 4,
    'A X': 3,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C Z': 7,
    'C Y': 6,
    'C X': 2
};
let score:any = [];
values.forEach((el, i, arr) => {
    if(el !== ''){
        score.push(results[el]);
    }
});

console.log(score.reduce((accumulator:any, currentValue:any) => accumulator + currentValue,0));

