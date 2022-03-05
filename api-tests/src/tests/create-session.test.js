const {StatusCodes} = require('http-status-codes');
const {createSession} = require('../helpers/create-session');

describe('POST /sessions', () => {
    it.each`
        name                                                                          | time      | createdAt
        ${'User One'}                                                                 | ${10000}   | ${new Date().toString()} // normal scenario
        ${'My name is so long but this should still work as expected with no issues'} | ${10000}   | ${new Date().toString()} // long name
        ${'Simple Name'}                                                              | ${1000000} | ${new Date().toString()} // more time
    `('should be able to create a session successfully', async ({name, time, createdAt}) => {
        const requestBody = {name, time, createdAt};
        const {status, body} = await createSession(requestBody);
        expect(status).toBe(StatusCodes.OK);
        expect(body).toEqual(expect.objectContaining(requestBody));
        expect(body.id).toEqual(expect.any(String));
    });

    it('should get an error when the time is not an integer', async () => {
        const requestBody = {
            name: 'Invalid Time',
            time: 'abcd',
            createdAt: new Date().toString(),
        }
        const {status} = await createSession(requestBody);
        expect(status).toBe(StatusCodes.BAD_REQUEST);
    });

    it('should get an error when the createdAt is not a valid date', async () => {
        const requestBody = {
            name: 'Invalid Date',
            time: 100000,
            createdAt: 'abcd',
        }
        const {status} = await createSession(requestBody);
        expect(status).toBe(StatusCodes.BAD_REQUEST);
    });
});
