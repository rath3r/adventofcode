import {
    sumArrayValues
} from '../helpers/helper'

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
        

        const handType = identifyHandsWithJoker(cardArr);
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

export const identifyHandsWithJoker = (cards:Array<card>): number => {
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
        if(cards[4].cardValue === "J"){
            handType = 6;
        } else {
            handType = 5;
        }
    }
    // full house
    if(cards[0].cardOccurence === 3 && cards[3].cardOccurence === 2){
        if(cards[3].cardValue === "J" && cards[3].cardValue === "J"){
            handType = 6;
        } else {
            handType = 4;
        }
    }
    // three of a kind
    if(cards[0].cardOccurence === 3 && cards[3].cardOccurence === 1){
        if(cards[3].cardValue === "J" || cards[4].cardValue === "J"){
            handType = 5;
        } else {
            handType = 3;
        }
    }
    // two pair
    if(cards[0].cardOccurence === 2 && cards[2].cardOccurence === 2){
        if(cards[4].cardValue === "J"){
            handType = 4;
        } else if (cards[2].cardValue === "J"){
            handType = 5;
        } else {
            handType = 2;
        }
    }
    // one pair
    if(cards[0].cardOccurence === 2 && cards[2].cardOccurence === 1){
        if(cards[2].cardValue === "J" || cards[3].cardValue === "J" || cards[4].cardValue === "J"){
            handType = 3;
        } else {
            handType = 1;
        }
    }
    return handType;
};

const getCardRank = (cardValue:string) => {
    const cardRank: {[key: string]: number} = {"A": 13, "K": 12, "Q": 11, "J": 10, "T": 9, "9": 8, "8": 7, "7": 6, "6": 5, "5": 4, "4": 3, "3": 2, "2": 1};
    return cardRank[cardValue];
};

const getCardRankWithJoker = (cardValue:string) => {
    const cardRank: {[key: string]: number} = {"A": 13, "K": 12, "Q": 11, "T": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2, "J": 1};
    return cardRank[cardValue];
};

export const rankHands = (values:Array<string>):Array<hand> => {
    const data = setUpData(values);
    data.sort((a:hand, b:hand) => {
        if(a.handType > b.handType) return 1;
        if(a.handType < b.handType) return -1;
        if(a.handType === b.handType) {
            const handAArr = a.hand.split("");
            const handBArr = b.hand.split("");
            for(let [i] of handAArr.entries()){
                if(getCardRankWithJoker(handAArr[i]) > getCardRankWithJoker(handBArr[i])){
                    return 1;
                }else if(getCardRankWithJoker(handAArr[i]) < getCardRankWithJoker(handBArr[i])){
                    return -1
                }
            }
        }
        return 0;
    });

    return data;
}

export const calculateWinnings = (values:Array<string>) => {
    const data = rankHands(values);
    const winnings = [];
    for(let [i] of data.entries()){
        const rank = i + 1;
        //console.log(rank)
        winnings.push(data[i].bid * rank);
        //console.log(data[i]);
    }
    return sumArrayValues(winnings);
};
