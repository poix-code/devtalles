import { getPokemonById } from "../js-foundation/06-promises";

describe('js-foundation/06-promises.ts', () => {

    test('getPokemonById should return a pokemon', async ()=> {
        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);
        expect(pokemonName).toBe('bulbasaur');
    });

    test('Should return error if pokemon does not exist', async () => {
        const pokemonId = 999999999;

        try {
            await getPokemonById(pokemonId);
            // If the above line does not throw, fail the test
            fail('Expected getPokemonById to throw an error');
        } catch (error) {
            expect(error).toBe(`Pokemon with id ${pokemonId} not found`);
        }
    });
});