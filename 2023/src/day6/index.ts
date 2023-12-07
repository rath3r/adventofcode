import * as fs from 'fs';
import * as path from 'path';
import { 
    setUpData,
    setUpKernedData,
    calculateProductOfWins
 } from "./day6";

const values = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString().split("\n");
//const values = Array();
//console.log(values);

//const data = setUpData(values);
const data = setUpKernedData(values);


console.log(calculateProductOfWins(data));

