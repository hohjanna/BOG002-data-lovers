import { order, searchFilter, typeFilter } from '../src/data.js';
let assertEqual = require('assert');


describe('order', () => {
    it('is a function', () => {
        expect(typeof order).toBe('function');
    });

    it('must sort champions from a to z', () => {
        let arrayAs = order(['a', 'z'], 'ascendente');
        assertEqual(arrayAs, ['a', 'z']);
    });

    it('must sort champions from z to a', () => {
        let arrayDes = order(['a', 'z'], 'descendente');
        assertEqual(arrayDes, ['z', 'a']);
    });
});




describe('searchFilter', () => {
    it('is a function', () => {
        expect(typeof searchFilter).toBe('function');
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

});