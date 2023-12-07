
export const setUpData = (values:Array<string>):Array<Array<number>> => {
    const timeLine = values[0].split(":")[1].trim().split(" ").filter(Number);
    const distanceLine = values[1].split(":")[1].trim().split(" ").filter(Number);
    const data = [];
    for(let i = 0; i<timeLine.length; i++){
        const lineData = [];
        lineData.push(Number(timeLine[i]));
        lineData.push(Number(distanceLine[i]));
        data.push(lineData);
    }
    return data;
};

export const setUpKernedData = (values:Array<string>):Array<Array<number>> => {

    const timeLine = values[0].split(":")[1].trim().split(" ").filter(Number).join('');
    const distanceLine = values[1].split(":")[1].trim().split(" ").filter(Number).join('');
    const data = [];
    const lineData = [];
    lineData.push(Number(timeLine));
    lineData.push(Number(distanceLine));
    data.push(lineData);

    return data;
};

export const calculateDistanceByTime = (speed:number, time: number):number => {
    return speed * time;
};

export const calculateNumberOfPossibleTimes = (raceTime: number, recordDistance: number):number => {
    const possibilities:Array<number> = [];
    for(let i = 0; i <= raceTime; i++){
        const speed = raceTime - i;
        const time = raceTime - speed;
        const distance = calculateDistanceByTime(speed, time);
        if(distance > recordDistance){
            possibilities.push(distance);
        }
    }
    return possibilities.length;
};

export const calculateProductOfWins = (data:Array<Array<number>>):number => {
    const wins = [];
    for(let [i, value] of data.entries()){
        wins.push(calculateNumberOfPossibleTimes(value[0], value[1]));
    }

    return wins.reduce((a, b) => a * b);
};
