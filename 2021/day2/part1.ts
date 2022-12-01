import fs from 'fs';

const inputData = fs.readFileSync('./input.txt', 'utf8');

interface Command {
    direction: string;
    value: number;
}

function getInput(data: string): Command[] {
    let dataArr = data.split("\n");
    let retArr = new Array;

    dataArr.forEach((el) => {
        let commandStr = el.split(" ");
        retArr.push({
            direction: commandStr[0],
            value: +commandStr[1]
        } as Command);
    });

    return retArr;
}

let commands: Command[] = getInput(inputData);
let horizontalSum = 0;
let aim = 0;
let depth = 0;

commands.forEach((el) => {
    if (el.direction !== 'forward') {
        if (el.direction == 'up') {
            aim -= el.value;
        } else if (el.direction == 'down') {
            aim += el.value;
        }
    } else {
        horizontalSum += el.value;
        let newDepth = el.value * aim;
        depth += newDepth;
    }
});

console.log(horizontalSum);
console.log(depth);
console.log(horizontalSum * depth);
