import * as fs from 'fs';
import * as path from 'path';
import { 
    setupData,
    getDestinationForSource,
 } from "./day5";

const values = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString().split("\n");
//const values = Array();
//console.log(values);

const data = setupData(values);
const locations = [];
//for(let [i, seed] of data.seeds.entries()){
for(let i = 0; i < data.seeds.length;i = i + 2){
//    console.log(data.seeds[i]);
//    console.log('----');

//    console.log(data.seeds[i+1]);
    let sourceStart = data.seeds[i];
    let sourceEnd = sourceStart + (data.seeds[i+1] - 1);

    //let source = sourceStart;
    for(let j = sourceStart; j <= sourceEnd; j++){
        let source = j;
        for(let k = 0; k < data.maps.length; k++){
            let destination = getDestinationForSource(source, data.maps[k]);
            source = destination;
        
            console.log("-----");
            console.log("Seed: " + i + " SourceStart: " + sourceStart + " SourceEnd: " + sourceEnd + " check this source: " + j + " Next: " + source);
        }
        locations.push(source);
        //source++;
    }
}

const min = Math.min(...locations);
console.log(min);
