import{
    rankHands,
//    rankHands,
//    calculateWinnings,
//   identifyHands,
//    rankHandTypes,
    setUpData
} from '../src/day7/day7';

const exampleInput = [
    "32T3K 765",
    "T55J5 684",
    "KK677 28",
    "KTJJT 220",
    "QQQJA 483"
];

const exampleData = [
    {
        originalValue: "32T3K 765",
        hand: "32T3K",
        bid: 765,
        handType: 1,
        rank: 0,
        cards: [
            {
                cardOccurence: 2,
                cardValue: "3",
            },
            {
                cardOccurence: 2,
                cardValue: "3",
            },
            {
                cardOccurence: 1,
                cardValue: "2",
            },
            {
                cardOccurence: 1,
                cardValue: "T",
            },
            {
                cardOccurence: 1,
                cardValue: "K",
            },
        ]
    },
    {
        originalValue: "T55J5 684",
        hand: "T55J5",
        bid: 684,
        handType: 3,
        rank: 0,
        cards: [
            {
                cardOccurence: 3,
                cardValue: "5",
            },
            {
                cardOccurence: 3,
                cardValue: "5",
            },
            {
                cardOccurence: 3,
                cardValue: "5",
            },
            {
                cardOccurence: 1,
                cardValue: "T",
            },
            {
                cardOccurence: 1,
                cardValue: "J",
            },
        ]
    },
    {
        originalValue: "KK677 28",
        hand: "KK677",
        bid: 28,
        handType: 2,
        rank: 0,
        cards: [
            {
                cardOccurence: 2,
                cardValue: "K",
            },
            {
                cardOccurence: 2,
                cardValue: "K",
            },
            {
                cardOccurence: 2,
                cardValue: "7",
            },
            {
                cardOccurence: 2,
                cardValue: "7",
            },
            {
                cardOccurence: 1,
                cardValue: "6",
            },
        ]
    },
    {
        originalValue: "KTJJT 220",
        hand: "KTJJT",
        bid: 220,
        handType: 2,
        rank: 0,
        cards: [
            {
                cardOccurence: 2,
                cardValue: "T",
            },
            {
                cardOccurence: 2,
                cardValue: "J",
            },
            {
                cardOccurence: 2,
                cardValue: "J",
            },
            {
                cardOccurence: 2,
                cardValue: "T",
            },
            {
                cardOccurence: 1,
                cardValue: "K",
            },
        ]
    },
    {
        originalValue: "QQQJA 483",
        hand: "QQQJA",
        bid: 483,
        handType: 3,
        rank: 0,
        cards: [
            {
                cardOccurence: 3,
                cardValue: "Q",
            },
            {
                cardOccurence: 3,
                cardValue: "Q",
            },
            {
                cardOccurence: 3,
                cardValue: "Q",
            },
            {
                cardOccurence: 1,
                cardValue: "J",
            },
            {
                cardOccurence: 1,
                cardValue: "A",
            },
        ]
    },
];

const orderedData = [
    {
        originalValue: "32T3K 765",
        hand: "32T3K",
        bid: 765,
        handType: 0,
        rank: 0
    },
    {
        originalValue: "KTJJT 220",
        hand: "KTJJT",
        bid: 220,
        handType: 0,
        rank: 0
    },
    {
        originalValue: "KK677 28",
        hand: "KK677",
        bid: 28,
        handType: 0,
        rank: 0
    },
    {
        originalValue: "T55J5 684",
        hand: "T55J5",
        bid: 684,
        handType: 0,
        rank: 0
    },
    {
        originalValue: "QQQJA 483",
        hand: "QQQJA",
        bid: 483,
        handType: 0,
        rank: 0
    },
];

const cards = ["A", "K", "Q", "J", "T", 9, 8, 7, 6, 5, 4, 3, 2];
// can we use a value on all cards to compare them


describe('day7', () => {
    it('should set up the data correctly', () => {
        expect(setUpData(exampleInput)).toEqual(exampleData);
    });

    it('rankHands should rank hands', () => {
        // rank the example
        //expect(rankHands(exampleInput)).toEqual(orderedData);

        expect(rankHands(exampleInput)).toBe(3);
    });

    it('calculateWinnings should combine the bind, rank and order to calculate the winnings', () => {
        //expect().toBe(6440);
    });

    it('identifyHands should identify and sort by type of hand', () => {
        
    });

    it('rankHandTypes should rank hand of the same type', () => {});

    it('compareHands should compare hands', () => {});

});