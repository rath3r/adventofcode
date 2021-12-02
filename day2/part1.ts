import fs from 'fs';

const inputData = fs.readFileSync('./input-short.txt', 'utf8');

interface Command {
    direction: string;
    value: number;
}

let getInput = (data: string): Command[] => {
    let arr = data.split("\n");

    let command: Command = [
        direction: 'up',
        value: 1
    ];

    return [command];
}

let commands: Command[] = getInput(inputData);
