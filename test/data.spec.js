import { sortNames, searchFilter, typeFilter, stats } from '../src/data.js';
import data from '../src/data/lol/lol.js';
const lol = Object.values(data.data);
let assertEqual = require('assert');


describe('sort', () => {
    it('is a function', () => {
        expect(typeof sortNames).toBe('function');
    });

    it('must sort champions from a to z', () => {
        let arrayAs = sortNames(['a', 'z'], 'AZ');
        assertEqual(arrayAs, ['a', 'z']);
    });

    it('must sort champions from z to a', () => {
        let arrayDes = sortNames(['a', 'z'], 'ZA');
        assertEqual(arrayDes, ['z', 'a']);
    });

    it('should return true if a > b', () => {
        let champsName = [{
                name: 'Aatrox',
            },
            {
                name: 'Ahri',
            }
        ];
        let arrTrue = sortNames(champsName);
        assertEqual(arrTrue, ['Aatrox', 'Ahri']);
    });

});


describe('searchFilter', () => {
    it('is a function', () => {
        expect(typeof searchFilter).toBe('function');
    });

    it('should return only the searched array', () => {
        let arrayInput = searchFilter([], 'Zilean');
        assertEqual(arrayInput, ['Zilean']);
    });

    it('should return only the searched array', () => {
        expect(searchFilter(lol, "Annie")).toHaveLength(0);
    });

    it('should return only the searched array', () => {
        let arrayInput = typeFilter([], 'Aatrox');
        assertEqual(arrayInput, ['Aatrox']);
    });

    it('should return array with lowercase value', () => {
        let arrayInput = typeFilter([], 'aatrox');
        assertEqual(arrayInput, ['Aatrox']);
    });

    it('should return array with special character value', () => {
        let arrayInput = typeFilter([], '.');
        assertEqual(arrayInput, ['Dr. Mundo']);
    });

});

describe('typeFilter', () => {
    it('is a function', () => {
        expect(typeof typeFilter).toBe('function');
    });

    it('should return all the champions by all value', () => {
        let array = typeFilter([], 'all');
        assertEqual(array, []);
    });

    it('should return a filtered array by tags value', () => {
        let arrayFilter = typeFilter([], 'Fighter', 'Tank', 'Mage', 'Support', 'Assassin', 'Marksman');
        assertEqual(arrayFilter, ['Fighter', 'Tank', 'Mage', 'Support', 'Assassin', 'Marksman']);
    });

    it('should return Aatrox when select Tank', () => {
        let select = 'Tank';
        let champsType = [{
                name: 'Aatrox',
                tags: ["Fighter", "Tank"]
            },
            {
                name: 'Ahri',
                tags: ["Mage", "Assassin"]
            }
        ];
        let includeValue = typeFilter(champsType, select);
        assertEqual(includeValue, 'Aatrox');
    });

});

describe('stats', () => {
    it('is a function', () => {
        expect(typeof stats).toBe('function');
    });

    it('must group the champions by difficulty', () => {
        let champsLevel = [{
                name: 'Aatrox',
                info: { difficulty: 1 }
            },
            {
                name: 'Ashe',
                info: { difficulty: 1 }
            },
            {
                name: 'Bard',
                info: { difficulty: 2 }
            }
        ];

        let groupBy = stats(champsLevel);
        assertEqual(groupBy, [2, 1]);
    });
});