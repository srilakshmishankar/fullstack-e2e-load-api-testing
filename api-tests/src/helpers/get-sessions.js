const {get} = require("../lib");

const getSessions = async () => {
    const {status, body} = await get({
        path: '/api/sessions',
    });
    return {status, body};
}

module.exports = {
    getSessions
}
