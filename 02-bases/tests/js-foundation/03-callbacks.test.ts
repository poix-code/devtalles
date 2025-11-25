import { getUserById } from "../js-foundation/03-callbacks";


describe('js-foundation/03-callbacks.ts', () => {

    test('getUserById should return an error if user does not exist', (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`USER with id ${id} not found`);
            expect(user).toBeUndefined();
            done();
        });
    });

    test('getUserById should return a user if it exists', (done) => {
        const id = 1;
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({ id: 1, name: 'Jhon Doe' });
            done();
        });
    });
});