import { LogEntity, LogSeverityLevel } from "./log.entity";

describe('LogEntity', () => {

    const dataObj = {
        message: 'test-message',
        level: LogSeverityLevel.low,
        origin: 'log.entity.test.ts'
    };
    
    test('Should create a LogEntity instance', () => {
        const log = new LogEntity(dataObj);
        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObj.message);
        expect(log.level).toBe(dataObj.level);
        expect(log.origin).toBe(dataObj.origin);
        expect(log.createdAt).toBeInstanceOf(Date);
    });

    test('Should create a LogEntity instance from json', () => {

        const json = `{"level":"low","message":"Service https://google.com working","createdAt":"2026-02-11T20:49:10.846Z","origin":"check-service.ts"}`;
        const log = LogEntity.fromJson(json);
        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe("Service https://google.com working");
        expect(log.level).toBe(LogSeverityLevel.low);
        expect(log.origin).toBe("check-service.ts");
        expect(log.createdAt).toBeInstanceOf(Date);
    });

    test('Should assign an empty {} if json is an empty string', () => {
        const emptyLog = LogEntity.fromJson('');
        expect(emptyLog).toBeInstanceOf(LogEntity);
        expect(emptyLog.message).toBe(undefined);
        expect(emptyLog.level).toBe(undefined);
        expect(emptyLog.origin).toBe(undefined);
        expect(emptyLog.createdAt).toBeInstanceOf(Date);
    });

    test('Should create a LogEntity instance from object', () => {
        const log = LogEntity.fromObject(dataObj);
        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObj.message);
        expect(log.level).toBe(dataObj.level);
        expect(log.origin).toBe(dataObj.origin);
        expect(log.createdAt).toBeInstanceOf(Date);
    });
});