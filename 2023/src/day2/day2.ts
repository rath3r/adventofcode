const correctRed = 12;
const correctGreen = 13;
const correctBlue = 14;

export const calculatePossibleGames = (games:Array<string>) => {
    let total = 0;
    for(const i in games){
        const lineArr = games[i].split(":");
        const gameIDArr = lineArr[0].split(" ");
        const gameID = gameIDArr[1];
        const drawsArr = lineArr[1].split(";");
        let impossibleGame = false;
        for(const j in drawsArr){
            const drawArr = drawsArr[j].split(",");
            for(const k in drawArr){
                if(drawArr[k].split(" ")[2] === 'red' && Number(drawArr[k].split(" ")[1]) > correctRed){
                   impossibleGame = true; 
                }
                if(drawArr[k].split(" ")[2] === 'green' && Number(drawArr[k].split(" ")[1]) > correctGreen){
                   impossibleGame = true; 
                }
                if(drawArr[k].split(" ")[2] === 'blue' && Number(drawArr[k].split(" ")[1]) > correctBlue){
                   impossibleGame = true; 
                }
            }
        }
        if(!impossibleGame){
            total += Number(gameID);
        }
    }

    return total;
}