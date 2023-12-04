const splitLine = (line:string): Array<string> => {

    return line.split('.');
};

export const separateString = (element: string): Array<number> => {
    const splitElement = splitLine(element);
    const numbers = Array();
    for(const i in splitElement){
        
        if(!isNaN(Number(splitElement[i])) && splitElement[i] !== '' ){
            numbers.push(Number(splitElement[i]));
        }
    }

    return numbers;
};

export const checkForSpecialCharacters = (element:string): Array<string|number> => {
    const splitElement = splitLine(element);
    const charactersAndPositions = Array();
    for(const i in splitElement){
        if(isNaN(Number(splitElement[i]))){
            charactersAndPositions.push([splitElement[i], Number(i)])
        }
    }
    return charactersAndPositions;
};

export const getAdjacentNumbers = (lines: Array<string>): Array<number> => {
    for(let i of lines){
        const splitElement = splitLine(lines[i]);
        const index = Number(i);
        const len = lines.length;
        const previous = lines[(index+len-1)%len];
        const next = lines[(index+1)%len];
        
    }
    return [1];
};

export const calculateSum = (input:Array<number>): number => {
    return 1;
};