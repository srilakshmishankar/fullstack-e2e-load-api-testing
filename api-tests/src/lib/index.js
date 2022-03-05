const request = require('supertest');
const {config} = require('../config')

const get = async ({path}) => {
    const response = await request(config.SERVICE_URL)
        .get(path)
        .set('Accept', 'application/json');
    return {status: response.statusCode, body: response.body};
}

const post = async ({path, requestBody}) => {
    const response = await request(config.SERVICE_URL)
        .post(path)
        .set('Accept', 'application/json')
        .send(requestBody);
    return {status: response.statusCode, body: response.body};
}

module.exports = {
    get,
    post
}
