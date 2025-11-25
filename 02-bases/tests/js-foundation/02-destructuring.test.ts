import { characters } from "../js-foundation/02-destructuring";

describe('js-foundation/02-destructuring.ts', () => {
    
    test('characters should contain Goku, Vegeta and Trunks', () => {
        expect(characters).toContain('Goku');
        expect(characters).toContain('Vegeta');
        expect(characters).toContain('Trunks');
    });

    test('trunks should be the third character in the array', () => {
        const [ , , trunks ] = characters;
        expect(trunks).toBe('Trunks');
    });
});