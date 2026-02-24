import { mock } from "node:test";
import { EmailService } from "../../../presentation/email/email.service";
import { LogRepository } from "../../repository/log.repository";
import { SendEmailLogs } from "./send-email-logs";
import { LogEntity } from "../../entities/log.entity";

describe('SendEmailLogs', () => {

    const mockEmailService = {
        sendEmailWithFileSystemLogs: jest.fn().mockReturnValue(true),
    };

    const mockLogRepository: LogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    };

    const sendEmailLogs = new SendEmailLogs(
        mockEmailService as any,
        mockLogRepository
    );

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should call sendEmail and saveLog', async () => {

        const result = await sendEmailLogs.execute('juan@google.com');
        expect(result).toBe(true);
        expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
        expect(mockLogRepository.saveLog).toHaveBeenCalledTimes(1);
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith({
            createdAt: expect.any(Date),
            level: "low",
            message: "Log email sent",
            origin: "send-email-logs.ts",
        });
    });

    test('Should log in case of error', async () => {

        mockEmailService.sendEmailWithFileSystemLogs.mockResolvedValue(false);
        const result = await sendEmailLogs.execute('juan@google.com');
        expect(result).toBe(false);
        expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
        expect(mockLogRepository.saveLog).toHaveBeenCalledTimes(1);
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith({
            createdAt: expect.any(Date),
            level: "high",
            message: "Error: Email log not sent",
            origin: "send-email-logs.ts",
        });
    });
});