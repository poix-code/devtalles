const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) throw new Error('Birthage is required');
    return getAgePlugin(birthdate);
};

module.exports = {
    getAge
};