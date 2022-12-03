import * as fs from 'fs';

const inputData = fs.readFileSync('./day3/input-full.txt','utf8');

let values = inputData.split("\n");
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let divideString = (str:string):[string, string] => {
    let strArr = [];
    let firstHalf = str.substr(0, str.length/2);
    let secondHalf = str.substr(str.length/2, str.length);

    return [firstHalf, secondHalf];
};

let compareHalves = (str:string):string[] => {
    let halves = divideString(str);
    let firstHalf = halves[0].split('');
    let secondHalf = halves[1].split('');
    let shared = firstHalf.filter(firstEl => secondHalf.includes(firstEl));
    return shared;
};

let score:any = [];
values.forEach((el, i, arr) => {
    if(el !== ''){
        let shared = compareHalves(el);
        alphabet.split('').forEach((el, i, arr) => {
            if(shared[0] === el){
                score.push(i+1)
            }
        }); 
    }
});

console.log(score.reduce((accumulator:number, currentValue:number) => accumulator + currentValue,0));

