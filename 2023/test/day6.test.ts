import {
    calculateDistanceByTime,
    calculateNumberOfPossibleTimes,
    setUpData,
    setUpKernedData,
    calculateProductOfWins
} from '../src/day6/day6'

// Time is how long the race lasts
// Distance is the record for that race
const exampleInput = [
    "Time:      7  15   30",
    "Distance:  9  40  200"
]
const exampleData = [
    [7,9],
    [15,40],
    [30,200]
]
const correctData = [
    [71530,940200]
]
describe('Day6', () => {
    it('setUpData should setup the data', () => {
        expect(setUpData(exampleInput)).toStrictEqual(exampleData);
    });

    it('setUpKernedData', () => {
        expect(setUpKernedData(exampleInput)).toStrictEqual(correctData);
    });

    it('calculateDistanceByTime should calculate the distance traveled by the time given', () => {
        expect(calculateDistanceByTime(5, 2)).toBe(10);
    });

    test.each([
        [7,9,4],
        [15, 40, 8],
        [30, 200, 9],
    ])('for a time of %i and a distance of %i there should be %i possible ways of winning', (t, d, p) => {
        expect(calculateNumberOfPossibleTimes(t,d)).toBe(p);
    });

    it('calculateProductOfWins should multiply the wins', () => {
        expect(calculateProductOfWins(exampleData)).toBe(288);
    });

    // it('calculateNumberOfPossibleTimes should provide the number of possible times that can finish the race', () => {
    //     expect(calculateNumberOfPossibleTimes(30,200)).toBe(9);
    // });
});