interface hand {
    originalValue: string,
    hand: string,
    bid: number,
    handType: number,
    rank: number,
    cards: Array<card>
};

interface card {
    cardValue: string,
    cardOccurence: number
}

export const setUpData = (values:Array<string>): Array<hand> => {
    const data = [];
    for(let [i, value] of values.entries()){
        const handValue = value.split(" ")[0];
        const bid = Number(value.split(" ")[1]);

        const cardArr:Array<card> = [];
        const handArr = handValue.split("");
        for(let [i, cardStr] of handArr.entries()){
            const card:card = {
                cardValue: cardStr,
                cardOccurence: countElements(handArr, cardStr)
            }
            cardArr.push(card);
        }
        

        const handType = identifyHands(cardArr);
        const hand:hand = {
            originalValue: value,
            hand: handValue,
            bid: bid,
            handType: handType,
            rank: 0,
            cards: cardArr
        }
        data.push(hand);
    }
    return data;
};

const countElements = (array:Array<string>, target:string):number => {
    var count = 0;
    for(var i = 0; i < array.length; ++i){
        if(array[i] == target)
            count++;
    }
    return count;
};

export const identifyHands = (cards:Array<card>): number => {
    //console.log(cards);
    cards.sort((a,b) => {
        if(a.cardOccurence < b.cardOccurence) return 1;
        if(a.cardOccurence > b.cardOccurence) return -1;
        return 0;
    });
    //console.log(cards);
    let handType = 0;
    //for(let [i, card] of cards.entries()){
    // five of a kind
    if(cards[0].cardOccurence === 5){
        handType = 6;
    }
    // four of a kind
    if(cards[0].cardOccurence === 4){
        handType = 5;
    }
    // full house
    if(cards[0].cardOccurence === 3 && cards[3].cardOccurence === 2){
        handType = 4;
    }
    // three of a kind
    if(cards[0].cardOccurence === 3 && cards[3].cardOccurence === 1){
        handType = 3;
    }
    // two pair
    if(cards[0].cardOccurence === 2 && cards[2].cardOccurence === 2){
        handType = 2;
    }
    // one pair
    if(cards[0].cardOccurence === 2 && cards[2].cardOccurence === 1){
        handType = 1;
    }
    return handType;
};

const compare = (a:hand, b:hand) => {
    //identifyHands(a);
    return 0;
};

export const rankHands = (values:Array<string>):Array<hand> => {
    const data = setUpData(values);
    console.log("Before: " + data[0].hand);
    data.sort((a:hand, b:hand) => {
        if(a.handType < b.handType) return 1;
        if(a.handType > b.handType) return -1;
        if(a.handType === b.handType) {
            console.log(a.hand + " and " + b.hand + " have the same type.");
        }
        return 0;
    });
    console.log("After: " + data[0].hand)
    //for(card in data){
    //    hand identifyHands(card)
    //    card.hand = hand
    //}
    //randHandTypes(data)
    //rankHands(data)

    return []
}