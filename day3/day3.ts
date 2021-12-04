import fs from 'fs';
import { getInput } from '../helpers/getInput';
import { mode } from 'mathjs';

const inputData = fs.readFileSync('./input.txt', 'utf8');

const inputArr = getInput(inputData);
const outputArr = new Array;

inputArr.forEach((el) => {
    const digitArr = el.split('');

    digitArr.forEach((el: any, i: any) => {
        if (typeof outputArr[i] == 'undefined') {
            outputArr[i] = new Array;
        } 
        outputArr[i].push(el);
    });

});

const gamaArr = new Array;
const epsilonArr = new Array;
outputArr.forEach((el) => {
    const gamaMode = mode(el);
    gamaArr.push(gamaMode[0]);
    epsilonArr.push((1- gamaMode).toString());
});

console.log(parseInt(gamaArr.join(''), 2) * parseInt(epsilonArr.join(''), 2));
