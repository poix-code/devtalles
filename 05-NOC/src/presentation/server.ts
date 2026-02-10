import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infraestructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl(
    //new FileSystemDataSource()
    new MongoLogDataSource()
);
const emailService = new EmailService();

export class Server {
    static async start() {
        console.log('Server started');

        //todo: mandar email
        // new SendEmailLogs(
        //     emailService,
        //     logRepository
        // ).execute(
        //     ['juanuribe513@gmail.com', 'juan.uribe01@globant.com']
        // );
        // emailService.sendEmailWithFileSystemLogs(
        //     ['juanuribe513@gmail.com', 'juan.uribe01@globant.com']
        // );


        const logs = await logRepository.getLogs(LogSeverityLevel.medium);
        console.log(logs);

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         new CheckService(
        //             logRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error)
        //         ).execute(url);
        //         //new CheckService().execute('http://localhost:3000');
        //     }
        // );
    }
}