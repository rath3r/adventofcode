import {
    splitLine,
    getWinningNumbers,
    calculateCardScore,
    calculateSum
} from '../src/day4/day4';

const example = [
    "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
];

const realExample = [
    "Card 197: 43 22 47 86 64 70  3 59 87 13 | 56 24 57 38 36 76 85 96 63 62 18 44  8 25 69 54 75 39  2 81  6 77 58 33 83"
]

const firstLineSplit = ["Card 1", "41 48 83 86 17", "83 86  6 31 17  9 48 53"];

const winningNumbers = ["83", "86", "17", "48"];

const oneMatch = ["12"];

describe('day4', () => {
    it('splits each line into 3', () => {
        const result = splitLine(example[0]);
        expect(result).toStrictEqual(firstLineSplit);
    });

    it('checks if numbers are in list', () => {
        const result = getWinningNumbers(firstLineSplit);
        expect(result).toStrictEqual(winningNumbers);
    });

    it('calculates card score', () => {
        expect(calculateCardScore(winningNumbers)).toStrictEqual(8);
    });

    it('the card score is one if only one match', () => {
        expect(calculateCardScore(oneMatch)).toStrictEqual(1);        
    });

    it('calculate sum of scores', () => {
         expect(calculateSum(realExample)).toBe(13);
    });
});
