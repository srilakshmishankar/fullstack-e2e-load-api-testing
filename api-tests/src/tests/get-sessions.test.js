const {StatusCodes} = require('http-status-codes');
const {createSession} = require('../helpers/create-session');
const {getSessions} = require('../helpers/get-sessions');

describe('GET /sessions', () => {
    const requestBody = {
        name: 'List sessions',
        time: 10000,
        createdAt: new Date().toString(),
    }
    beforeAll(async () => {
        await createSession(requestBody);
    })
    it('should be able to get the list of sessions', async () => {
        const {status, body} = await getSessions();
        expect(status).toBe(StatusCodes.OK);
        expect(body.length).toBeGreaterThanOrEqual(1);
        expect(body).toEqual(expect.arrayContaining([
            expect.objectContaining(requestBody),
        ]));
    })
});
