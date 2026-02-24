import { Pool } from "pg";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { envs } from "../../config/plugins/envs.plugin";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, SeverityLevel } from "../../generated/prisma/client";

const pool =  new Pool({ connectionString: envs.POSTGRES_URL});
const adapter = new PrismaPg(pool);
const client = new PrismaClient({ adapter });
const severityEnum = {
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH
}

export class PostgresLogDataSource implements LogDataSource {
    async saveLog(log: LogEntity): Promise<void> {
        const level = severityEnum[log.level];
        await client.logModel.create({
            data: {
                ...log,
                level
            }
        });
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const level = severityEnum[severityLevel];
        const logs = await client.logModel.findMany({
            where: {
                level
            }
        });
        return logs.map(LogEntity.fromObject);
    }
}