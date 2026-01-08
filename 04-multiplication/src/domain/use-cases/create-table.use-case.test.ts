import { CreateTable } from "./create-table.use-case";

describe('CreateTableUseCase', () => { 

    test('Should create a table with default values', () => { 

        const createTable = new CreateTable();
        const result = createTable.execute({ base: 5 });
        const rows = result.split('\n').length;
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(result).toContain('5 x 1 = 5');
        expect(result).toContain('5 x 10 = 50');
        expect(rows).toBe(10);
    });

    test('Should create a table with custom values', () => {

        const options = {
            base: 3,
            limit: 15
        };

        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const rows = table.split('\n').length;
        console.log(table);
        expect(table).toContain('3 x 1 = 3');
        expect(table).toContain('3 x 15 = 45');
        expect(rows).toBe(options.limit);
    });
});