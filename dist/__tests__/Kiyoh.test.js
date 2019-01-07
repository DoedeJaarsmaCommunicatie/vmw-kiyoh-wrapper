"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Kiyoh_1 = require("../Kiyoh");
let k = new Kiyoh_1.VMWKiyoh();
describe('Kiyoh base tests', () => {
    test('Kiyoh', () => {
        expect(k).toBeInstanceOf(Kiyoh_1.VMWKiyoh);
    });
});
//# sourceMappingURL=Kiyoh.test.js.map