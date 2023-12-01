const numberWords = [
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
];


export const getFirstAndLast = (inputLine:string):number => {
    const inputLineArr = inputLine.split('');
    const first = inputLineArr.find((i) => !isNaN(Number(i))) || 0;
    const last = inputLineArr.reverse().find((i) => !isNaN(Number(i))) || 0;
    return Number(first.toString() + last.toString());
};

export const calculateCalibration = (calValArr:Array<number>):number => {
    return calValArr.reduce((a, b) => a + b);
};

export const replaceWordsWithNumbers = (inputLine:string):string => {
    let newLine = inputLine;
    let locations = Array();
    for(const i in numberWords){
        locations.push(inputLine.indexOf(numberWords[i][0]));
    }
    const largest = Math.max(...locations);
    
    let smallest = largest;
    for(const i in locations){
        if(largest >= 0){ 
            if(locations[i] >= 0){
                if(locations[i] < smallest){
                    smallest = locations[i];
                }
            }
        }
    }
    const smallRegEx = new RegExp(numberWords[locations.indexOf(smallest)][0], "g");
    newLine = inputLine.replace(smallRegEx, numberWords[locations.indexOf(smallest)][1]);

    const largeRegEx = new RegExp(numberWords[locations.indexOf(largest)][0], "g");
    newLine = newLine.replace(largeRegEx, numberWords[locations.indexOf(largest)][1]);

    return newLine;
};
