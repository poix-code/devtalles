import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe('Server App', () =>{
    
    const options = {
        base: 5,
        limit: 10,
        showTable: false,
        fileName: 'test-filename',
        fileDestination: 'test-destination'
    };
    
    test('Should create a ServerApp instance', () => {
        const app = new ServerApp();
        expect(app).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe("function");
    });

    test('Should run Server App with options', () => {

        // const logSpy = jest.spyOn(console, 'log');
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        // const options = {
        //     base: 5,
        //     limit: 10,
        //     showTable: false,
        //     fileName: 'test-filename',
        //     fileDestination: 'test-destination'
        // };

        // ServerApp.run(options);
        // expect(logSpy).toHaveBeenCalledTimes(2);
        // expect(logSpy).toHaveBeenCalledWith('Server is running...');
        // expect(logSpy).toHaveBeenCalledWith('Process completed successfully');
        // expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        // expect(createTableSpy).toHaveBeenCalledTimes(1);
        // expect(saveFileSpy).toHaveBeenCalledTimes(1);
        // expect(saveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     fileDestination: options.fileDestination,
        //     fileName: options.fileName
        // });
    });

    test('Should run with custom values mocked', () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2\n');
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;
        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server is running...');
        expect(createMock).toHaveBeenCalledWith({"base": options.base, "limit": options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2\n',
            fileDestination: options.fileDestination,
            fileName: options.fileName
        });
        expect(logMock).toHaveBeenCalledWith('Process completed successfully');
    });

    test('Should return Process failed with mock values', () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2\n');
        const saveFileMock = jest.fn().mockReturnValue(false);

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;
        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server is running...');
        expect(createMock).toHaveBeenCalledWith({"base": options.base, "limit": options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2\n',
            fileDestination: options.fileDestination,
            fileName: options.fileName
        });
        expect(logErrorMock).toHaveBeenCalledWith('Process failed');
    });

    test('Should log the table when showTable is true', () => {

        const logMock = jest.fn();
        const createTableMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);
        const optionsShowTable = {
            ...options,
            showTable: true
        };

        console.log = logMock;
        CreateTable.prototype.execute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;
        ServerApp.run(optionsShowTable);

        expect(logMock).toHaveBeenCalledWith('Server is running...');
        expect(createTableMock).toHaveBeenCalledWith({"base": options.base, "limit": options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileDestination: options.fileDestination,
            fileName: options.fileName
        });
        expect(logMock).toHaveBeenCalledWith('1 x 2 = 2');
        expect(logMock).toHaveBeenCalledWith('Process completed successfully');
    });
});