const expect = require('expect');
const {isRealString} = require('./validation')

describe('isRealString' ,() => {
    it('Should Reject non-string values', () => {
        let res = isRealString(98);
        expect(res).toBe(false);
    });

    it('Should Reject string with only spaces ', () => {
        let res = isRealString('     ');
        expect(res).toBe(false);
    });

    it('Should allow string with non-space characters ', () => {
        let res = isRealString('  vinod   ');
        expect(res).toBe(true);
    })
})