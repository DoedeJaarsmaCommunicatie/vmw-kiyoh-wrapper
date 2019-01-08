import { VMWKiyoh } from '../lib/Kiyoh';
let k = new VMWKiyoh();

describe('Kiyoh', () => {
    test('is instance of VMWKiyoh', () => {
        expect(k).toBeInstanceOf(VMWKiyoh);
    });
});

describe('Kiyoh properties via getters', () => {
    describe('Average', () => {
        test('Is null', () => {
            expect(k.average).toBeNull();
        });
        test('Is not undefined', () => {
            expect(k.average).not.toBeUndefined();
        });
        test('Is not truthy', () => {
            expect(k.average).not.toBeTruthy();
        });
    });
    describe('dataUrl', () => {
        test('Is not null', () => {
            expect(k.dataUrl).not.toBeNull();
        });
        test('Is not undefined', () => {
            expect(k.dataUrl).not.toBeUndefined();
        });
        test('Is not truthy', () => {
            expect(k.dataUrl).not.toBeTruthy();
        });
        test('Is empty string', () => {
            expect(k.dataUrl).toBe('');
        });
    });
    describe('target', () => {
        test('Is null', () => {
            expect(k.target).toBeNull();
        });
        test('Is not undefined', () => {
            expect(k.target).not.toBeUndefined();
        });
        test('Is not truthy', () => {
            expect(k.target).not.toBeTruthy();
        });
    });
});

describe('value for', () => {
    test('test', () => {
        k.testData().parseData();
    });
});
