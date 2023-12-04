import {
   separateString,
   checkForSpecialCharacters,
   getAdjacentNumbers,
   calculateSum, 
} from '../src/day3/day3';

const example = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..",
];

const smallExample = [
    "467..114..",
    "...*......",
    "..35..633.",
];

const adjacentNumbers = [467, 35];

describe('day3', () => {
    it('separateString should split up the string', () => {
        const result = separateString(example[0]);
        expect(result).toStrictEqual([467, 114]);
    });

    it('checkForSpecialCharacters should return true and position of any special characters', () => {
        const result = checkForSpecialCharacters(example[1]);
        expect(result).toStrictEqual([['*', 3]]);
    });

    it('getAdjacentNumbers should find munbers adjacent to special characters', () => {
        const result = getAdjacentNumbers(smallExample);
        expect(result).toBe([467, 35]);
    });

    it('calculateSum should sum the total of values adjacent to special characters', () => {
        const result = calculateSum(adjacentNumbers);
        expect(result).toBe(4361);
    });
});