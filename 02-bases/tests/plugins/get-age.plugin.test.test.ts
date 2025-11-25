import { getAge } from "../plugins/get-age.plugin";

describe('plugins/get-age.plugin.ts', () => {

    test('getAge() should return the age of a person', () => {
        const birthdate = '1994-09-16';
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');
    });

    test('getAge() should return correct age for a given birthdate', () => {
        const birthdate = '1994-09-16';
        const currentYear = new Date().getFullYear();
        const expectedAge = currentYear - 1994;
        const age = getAge(birthdate);
        expect(age).toBe(expectedAge);
    });

    test('getAge() should throw an error for invalid birthdate', () => {
        const invalidBirthdate = '';
        expect(() => getAge(invalidBirthdate)).toThrow('Birthdate is required');
    });

    test('getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthdate = '1995-06-15';
        const age = getAge(birthdate);
        expect(age).toBe(0);
    });
});