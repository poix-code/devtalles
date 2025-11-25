import { buildMakePerson } from "../js-foundation/05-factory";

describe('js-foundation/05-factory.ts', () => {

    const getUUID = () => '123-456-789';
    const getAge = () => 31;
    
    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
    
        expect(typeof makePerson).toBe('function');
    });

    test('buildMakePerson should return a person', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
        const person = makePerson({name: 'Juan', birthdate: '1992-06-15'});
        expect(person).toEqual({
            id: '123-456-789',
            name: 'Juan',
            birthdate: '1992-06-15',
            getAge: 31
        });
    });
});