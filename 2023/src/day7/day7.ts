interface hand {
    originalValue: string,
    hand: string,
    bid: number,
    handType: number,
    rank: number
};

export const setUpData = (values:Array<string>): Array<hand> => {
    const data = [];
    for(let [i, value] of values.entries()){
        const handValue = value.split(" ")[0];
        const bid = Number(value.split(" ")[1]);
        const hand:hand = {
            originalValue: value,
            hand: handValue,
            bid: bid,
            handType: 0,
            rank: 0
        }
        data.push(hand);
    }
    return data;
};

export const identifyHands = (card:hand):number => {
    const hand = card.hand;
    
    if(){

    }
};

export const rankHands = () => {
    data = setUpData();
    for(card in data){
        hand identifyHands(card)
        card.hand = hand
    }
    randHandTypes(data)
    rankHands(data)

}