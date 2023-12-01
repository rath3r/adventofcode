import { 
    getFirstAndLast, 
    calculateCalibration,
    replaceWordsWithNumbers 
} from '../src/day1/day1';

const testInputValues = [
    "1abc2",
    "pqr3stu8vwx",
    "a1b2c3d4e5f",
    "treb7uchet",
    "seven6sevenphjfhdtnrhfsgcfived9seven",
    "92",
    "onefive29htsdkllvr",
    "tbninefour4eight"
];

const testCalValues = [12, 38, 15, 77, 69, 92];

describe('getFirstAndLast', () => {
    it('finds the first and last number in a string', () => {
        const result = getFirstAndLast(testInputValues[0]);
        expect(result).toBe(testCalValues[0]);
    });

    it('if only one number it should use it twice', () => {
        const result = getFirstAndLast(testInputValues[3]);
        expect(result).toBe(testCalValues[3]);
    });

    test.each([
        [testInputValues[0], testCalValues[0]],
        [testInputValues[1], testCalValues[1]],
        [testInputValues[2], testCalValues[2]],
        [testInputValues[3], testCalValues[3]],
        [testInputValues[4], testCalValues[4]],
        [testInputValues[5], testCalValues[5]],
    ])('the input %s should produce the output %i', (input, output) => {
        const result = getFirstAndLast(input);
        expect(result).toBe(output)
    });

    it('calculates the sum of calibration values', () => {
        const result = calculateCalibration(testCalValues);
        expect(result).toBe(testCalValues.reduce((a,b) => a + b));    
    });
});

const testsWithWords = [
    "seven6sevenphjfhdtnrhfsgcfived9seven",
    "onefive29htsdkllvr",
    "tbninefour4eight"
];

const resultsWithWords = [
    "767phjfhdtnrhfsgc5d97",
    "1529htsdkllvr",
    "tb9four48"
];

describe('replaceWordsWithNumbers', () => {
    test.each([
        [testsWithWords[0], resultsWithWords[0]],
        [testsWithWords[1], resultsWithWords[1]],
        [testsWithWords[2], resultsWithWords[2]],
    ])('should replace %s with %s', (i, o) => {
        const result = replaceWordsWithNumbers(i);
        expect(result).toBe(o);
    });

    it('should check if the word string exists frist in the string before replacing it', () => {
        const result = replaceWordsWithNumbers("xtwone3four");
        expect(result).toBe("x2ne34");
    });

    it('should change anything if there are not numberWords', () => {
        const result = replaceWordsWithNumbers("3kjhffpxlt2");
        expect(result).toBe("3kjhffpxlt2");
    });
});