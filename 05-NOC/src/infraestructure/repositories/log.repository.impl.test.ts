import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository.impl";

describe('LogRepositoryImpl', () => {


    const mockLogDataSource = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    };
    const logRepository = new LogRepositoryImpl(mockLogDataSource);

    test('SaveLog should call the DataSource with arguments', async () => {

        const log = { origin: 'test-origin', message: 'test-message', level: 'low' } as LogEntity;
        await logRepository.saveLog(log);
        expect(mockLogDataSource.saveLog).toHaveBeenCalledWith(log);
    });

    test('getLogs should call the DataSource with arguments', async () => {
        await logRepository.getLogs(LogSeverityLevel.low);
        expect(mockLogDataSource.getLogs).toHaveBeenCalledWith(LogSeverityLevel.low);
    });
});