import * as fs from 'fs';
import * as path from 'path';
import { 
    calculateSum,
    calculateTotalOfCards
 } from "./day4";

const values = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString().split("\n");
//const values = Array();
console.log(values);

//console.log(calculateSum(values));
console.log(calculateTotalOfCards(values))
