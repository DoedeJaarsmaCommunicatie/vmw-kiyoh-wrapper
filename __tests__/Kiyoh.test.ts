import { VMWKiyoh } from '../Kiyoh';
let k = new VMWKiyoh();

describe('Kiyoh', () => {
    test('is instance of VMWKiyoh', () => {
        expect(k).toBeInstanceOf(VMWKiyoh);
    });
});

describe('Kiyoh properties', () => {
    test('Are undefined', () => {
        expect(k.average).toBeUndefined();
        expect(k.dataUrl).toBeUndefined();
        expect(k.target).toBeUndefined();
    })
})
