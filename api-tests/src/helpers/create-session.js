const {post} = require("../lib");

const createSession = async requestBody => {
    const {status, body} = await post({
        path: '/api/sessions',
        requestBody
    });
    return {status, body: body.timer};
}

module.exports = {
    createSession
}
