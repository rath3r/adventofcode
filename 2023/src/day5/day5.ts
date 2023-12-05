export const getDestinationForSource = (target:number, map:Array<Array<number>>): number => {
    let destination = 1;
    for(const i in map){
        const sourceStart = map[i][1];
        const destinationStart = map[i][0];
        const diff = sourceStart - destinationStart;
        const upper = sourceStart + (map[i][2] - 1);
        const lower = sourceStart;
        if(target > lower && target < upper){
            destination = target - diff;
        }
    }
    return destination;
};

export const setupData = (values:Array<string>) => {
    console.log(values);
    const data = {
        seeds: [],
        maps: [],
    };
    for(let i in values){
        
    }
    return "hello";
};