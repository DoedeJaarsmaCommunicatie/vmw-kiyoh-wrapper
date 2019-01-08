let k = require('../dist/Kiyoh').VMWKiyoh;

k = new k();

describe('Kiyoh', function() {
    test('Exists', function() {
        expect(k).toBeDefined();
    });
    describe('target', function() {
        test('is null', function() {
            expect(k.target).toBeNull();
        });
        test('Has value after being set', function() {
            let target = '.js-target-me';
            k.setTarget(target);
            expect(k.target).toBe(target);
        });
    });
    describe('Data Url', function() {
        test('Is empty string', function() {
            expect(k.dataUrl).toBe('');
            expect(k.dataUrl).not.toBeNull();
            expect(k.dataUrl).not.toBeUndefined();
            expect(k.dataUrl).not.toBeTruthy();
        });
        test('Gets correct testURL', function() {
            k.testData();
            expect(k.dataUrl).not.toBeNull();
            expect(k.dataUrl).not.toBe('');
            expect(k.dataUrl).toBe(k.testURL);
        });
        test('Gets correct liveURL', function() {
            k.liveData();
            expect(k.dataUrl).not.toBeNull();
            expect(k.dataUrl).not.toBe('');
            expect(k.dataUrl).toBe(k.liveURL);
        });
    });
});
