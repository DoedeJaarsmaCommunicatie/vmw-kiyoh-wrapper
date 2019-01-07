import { VMWKiyoh } from '../Kiyoh';
let k = new VMWKiyoh();

describe('Kiyoh base tests', () => {
    test('Kiyoh', () => {
        expect(k).toBeInstanceOf(VMWKiyoh);
    });
});
