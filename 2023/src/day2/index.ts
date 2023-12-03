import * as fs from 'fs';
import * as path from 'path';
import { calculatePossibleGames } from "./day2";

const values = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString().split("\n");
//const values = Array();
console.log(values);

console.log(calculatePossibleGames(values));
