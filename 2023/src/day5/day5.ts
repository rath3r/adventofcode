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

interface seedLocationMap {
    seeds: Array<number>,
    maps: Array<Array<number>>
}

export const setupData = (values:Array<string>): seedLocationMap => {
    //console.log(values);
    const data:seedLocationMap = {
        seeds: [],
        maps: [],
    };
    for(let [i, value] of values.entries()){
        if(value.indexOf("seeds:") >= 0){
            let seedsArr = value.split(":")[1].trim().split(" ");
            console.log(seedsArr);
            seedsArr.map((e) => {
                data.seeds.push(Number(e));
            });
        }
        let innerMap = [];
        let inMap = false;
        if(value.indexOf("map:") >= 0){
            inMap = true;
        }

            innerMap.push(values[i+1]);
    }

    console.log(data);
    return data;
};