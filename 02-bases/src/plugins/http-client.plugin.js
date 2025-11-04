const axios = require('axios');

const client = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    }
};

module.exports = {
    httpClient: client
};