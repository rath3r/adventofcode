import * as fs from 'fs';
import * as path from 'path';
import { getFirstAndLast, calculateCalibration, replaceWordsWithNumbers } from "./day1";

const values = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString().split("\n");
const numberValues = Array();

for(const value in values){
    let number = getFirstAndLast(replaceWordsWithNumbers(values[value]));
    numberValues.push(number);
}

console.log(calculateCalibration(numberValues));
