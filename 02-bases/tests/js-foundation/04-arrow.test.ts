import { getUserById } from "../js-foundation/04-arrow";

describe('js-foundation/04-arrow.ts', () => {

    test('getUserById should return error if an user does not exist', (done) => {
        const id = 4;
        try {
            getUserById(id);
            done('getUserById should throw an error if user does not exist');
        } catch (error) {
            expect((error as Error).message).toBe(`USER with id ${id} not found`);
            done();
        }
    });

    test('getUserById should return an user if it exists', (done) => {
        const id = 1;
        try {
            getUserById(id);
            expect(getUserById(id)).toEqual({
                id: 1,
                name: 'Jhon Doe'
            });
            done();
        } catch (error) {
            done('getUserById should not throw an error if user exists');
        }
    });
});