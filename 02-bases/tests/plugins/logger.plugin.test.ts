import { logger as winstonLogger, buildLogger } from "../../src/plugins/logger.plugin";


buildLogger

describe('plugins/logger.plugin.ts', () => {

    test('buildLogger should return a string', () => {
        const logger = buildLogger('test-service');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    test('logger.log method should log info messages', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'Test message';
        const service = 'test-service';
        const logger = buildLogger(service);
        logger.log(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service,
            })
        );
    });

    test('logger.error method should log error message', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'error');
        const message = 'Test error message';
        const service = 'test-service';
        const logger = buildLogger(service);
        logger.error(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'error',
            expect.objectContaining({
                message,
                service,
            })
        );
    });
});