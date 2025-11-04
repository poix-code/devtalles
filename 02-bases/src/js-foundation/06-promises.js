const { httpClient } = require('../plugins');

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const response = await httpClient.get(url);
    return response.name;
}

module.exports = {
    getPokemonById
};