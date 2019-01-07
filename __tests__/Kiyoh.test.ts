import { VMWKiyoh } from '../Kiyoh';
let k = new VMWKiyoh();

test('Kiyoh', () => {
    describe('Should be instance of VMWKiyoh', function () {
        expect(k).toBeInstanceOf(VMWKiyoh);
    });
});
