const { getAge } = require('./get-age.plugin');
const { getUUID } = require('./get-id.plugin');
const { httpClient } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
    getAge,
    getUUID,
    httpClient,
    buildLogger
};