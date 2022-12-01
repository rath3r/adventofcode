import * as fs from 'fs';

const inputData = fs.readFileSync('./day1/input-full.txt','utf8');

let values = inputData.split("\n");

let allelves:any = [];
let elf: number[] = [];
values.forEach((el, i, arr) => {
	
   	if(el !== '') {
		elf.push(+el);
    	}else{
        	allelves.push(elf.reduce(
  			(accumulator, currentValue) => accumulator + currentValue,
  			0	
			)
		);
		elf = [];
	}
});


allelves = allelves.sort(function(a:number, b:number) {
  return b - a;
});
console.log(allelves[0]+allelves[1]+allelves[2]);

