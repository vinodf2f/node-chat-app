let expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'gen';
        let text = 'Some Message';
        let message = generateMessage(from, text);

        expect(typeof(message.createdAt)).toBe('number');
        expect(message).toMatchObject({from,text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct Location object', () => {
        let from = 'Deb';
        let latitude = 11 ;
        let longitude = 13;
        let url = 'https://www.google.com/maps?q=11,13';
        let message = generateLocationMessage(from, latitude, longitude);


        expect(typeof(message.createdAt)).toBe('number');
        expect(message).toMatchObject({from,url});
    });
});