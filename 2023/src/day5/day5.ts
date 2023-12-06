export const getDestinationForSource = (target:number, map:Array<string>): number => {
    let destination = 1;
    for(const i in map){
        const valuesArr = map[i].split(" ");
        const sourceStart = Number(valuesArr[1]);
        const destinationStart = Number(valuesArr[0]);
        const diff = sourceStart - destinationStart;
        const upper = sourceStart + (Number(valuesArr[2]) - 1);
        const lower = sourceStart;
        if(target > lower && target < upper){
            destination = target - diff;
        }
    }
    return destination;
};

interface seedLocationMap {
    seeds: Array<number>,
    maps: Array<Array<string>>
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
            //console.log(seedsArr);
            seedsArr.map((e) => {
                data.seeds.push(Number(e));
            });
        }else{ 
            let inMap = null;
            if(value === ""){
                inMap = false
            }   
            let innerMap = [];
            if(value.indexOf("map:") >= 0){
                inMap = true;
                let j = i + 1;
                //console.log(j);
                //console.log(values[j]);
                while(values[j]){
                    //console.log("While: " + values[j]);
                    //let numberArr = values[j].split(" ");
                    innerMap.push(values[j]);
                    j++;
                }
                data.maps.push(innerMap);
                
            }
        }
    }

    //console.log(data);
    return data;
};