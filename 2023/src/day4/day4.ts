export const splitLine = (line:string): Array<string> => {
    return [line.split(':')[0], line.split(':')[1].split('|')[0].trim(), line.split(':')[1].split('|')[1].trim()];
};

export const getWinningNumbers = (line:Array<string>): Array<string> => {
    const matchingNumbers = [];
    const winningNumbers = line[1].split(" "); 
    const drawnNumbers = line[2].split(" ");
    for(let i in drawnNumbers){
        for(let k in winningNumbers){
            if(winningNumbers[k] == drawnNumbers[i] && winningNumbers[k] !== ""){
                matchingNumbers.push(winningNumbers[k]);
            }
        }
    }
    return matchingNumbers;
};

export const calculateCardScore = (matchingNumbers:Array<string>): number => {
    let score = 0;
    if(matchingNumbers.length > 0){
        score = 1;
    }
    for(let i in matchingNumbers){
        if(Number(i)>0){
            score = score * 2;
        }
    }
    return score;
};

export const calculateSum = (input:Array<string>): number => {
    let score = 0;
    for(let i in input){
        const line = splitLine(input[i]);
        const winningNumbers = getWinningNumbers(line);
        const lineScore = calculateCardScore(winningNumbers);
        score += lineScore;
    }
    return score;
};