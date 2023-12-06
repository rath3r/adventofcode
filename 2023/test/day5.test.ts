import {
    getDestinationForSource, setupData
} from '../src/day5/day5';

const example = [
    "seeds: 79 14 55 13",
    "",
    "seed-to-soil map:",
    "50 98 2",
    "52 50 48",
    "",
    "soil-to-fertilizer map:",
    "0 15 37",
    "37 52 2",
    "39 0 15",
    "",
    "fertilizer-to-water map:",
    "49 53 8",
    "0 11 42",
    "42 0 7",
    "57 7 4",
    "",
    "water-to-light map:",
    "88 18 7",
    "18 25 70",
    "",
    "light-to-temperature map:",
    "45 77 23",
    "81 45 19",
    "68 64 13",
    "",
    "temperature-to-humidity map:",
    "0 69 1",
    "1 0 69",
    "",
    "humidity-to-location map:",
    "60 56 37",
    "56 93 4",
];
// destination range start, source range start, range length
const workableData = {
    "seeds": [79, 14, 55, 13],
    "maps":[
        ["50 98 2","52 50 48"],
        ["0 15 37","37 52 2","39 0 15"],
        ["49 53 8","0 11 42","42 0 7","57 7 4"],
        ["88 18 7","18 25 70"],
        ["45 77 23","81 45 19","68 64 13"],
        ["0 69 1","1 0 69"],
        ["60 56 37","56 93 4"]
    ],
};

const smallMap = ["50 98 2","52 50 48"];
describe('day5', () => {
    it('set up data correctly', () => {
        expect(setupData(example)).toMatchObject(workableData);        
    });

    it('gets the destination for a source', () => {
        expect(getDestinationForSource(79, smallMap)).toBe(81);
    });
});