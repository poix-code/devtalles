
import { PrismaPg } from "@prisma/adapter-pg";
import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";
import { PrismaClient } from "./generated/prisma/client";

const connectionString = envs.POSTGRES_URL;

(async() => {
    main();
})();

async function main() {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    const adapter = new PrismaPg({connectionString});
    const prisma = new PrismaClient({adapter});
    const newLog =  await prisma.logModel.create({
        data: {
            level: 'LOW',
            message: 'Test message',
            origin: 'App.ts'
        }
    });

    console.log(newLog);

    Server.start();
}