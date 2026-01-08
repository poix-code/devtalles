import fs from 'fs';
import { SaveFile } from "./save-file.use-case";

describe('SaveFileUseCase', () => {

    beforeEach(() => {
        if (fs.existsSync('./outputs')) {
            fs.rmdirSync('./outputs', { recursive: true });
        }
    });

    afterEach(() => {
        if (fs.existsSync('./outputs')) {
            fs.rmdirSync('./outputs', { recursive: true });
        }
    });

    test('should save file with default parameters', () => {

        const saveFile = new SaveFile();
        const filePath = './outputs/table.txt';
        const options = {
            fileContent: 'Sample content for default parameters'
        };

        const file = saveFile.execute(options);
        expect(file).toBe(true);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        expect(checkFile).toBe(true);
        expect(fileContent).toBe('Sample content for default parameters');
    });

    test('Should save a file with custom values', () => {

        const options = {
            fileContent: 'Sample content for custom parameters',
            fileDestination: './outputs',
            fileName: 'custom_table'
        };

        const file =  new SaveFile().execute(options);
        expect(file).toBe(true);
        expect(fs.existsSync(`${options.fileDestination}/${options.fileName}.txt`)).toBe(true);
        expect(fs.readFileSync(`${options.fileDestination}/${options.fileName}.txt`, 'utf-8')).toBe(options.fileContent);
    });

    test('Should return false if the directory could not be created', () =>{

        const saveFile = new SaveFile();
        const mkdirSyncSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error('Mocked error creating directory');
        });
        const options = {
            fileContent: 'Sample content for error case'
        };

        const file = saveFile.execute(options);
        expect(file).toBe(false);
        mkdirSyncSpy.mockRestore();
    });

    test('Should return false if the file could not be created', () =>{

        const saveFile = new SaveFile();
        const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
            throw new Error('Mocked error creating file');
        });
        const options = {
            fileContent: 'Sample content for error case'
        };

        const file = saveFile.execute(options);
        expect(file).toBe(false);
        writeFileSyncSpy.mockRestore();
    });
});