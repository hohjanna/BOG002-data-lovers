import { order } from '../src/data.js';



describe('order', () => {
    it('is a function', () => {
        expect(typeof order).toBe('function');
    });

    it('must sort champions from a to z', () => {
        let orderA_Z = data.order(data, 'ascendente')
        expect([orderA_Z[0].name, orderA_Z[1].name, orderA_Z[2].name, orderA_Z[3].name, orderA_Z[4].name], ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu']);
    });

    /*it('must sort champions from a to z', () => {
        expect(example()).toBe('example');
    });

    it('must sort champions from z to a', () => {
        expect(example()).toBe('example');
    });*/
});


/*describe('anotherExample', () => {
    it('is a function', () => {
        expect(typeof anotherExample).toBe('function');
    });

    it('returns `anotherExample`', () => {
        expect(anotherExample()).toBe('OMG');
    });
});*/