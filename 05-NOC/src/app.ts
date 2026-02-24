
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";
import { PrismaClient } from "./generated/prisma/client";

(async() => {
    main();
})();

async function main() {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    const pool = new Pool({ connectionString: envs.POSTGRES_URL });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });
    // const newLog =  await prisma.logModel.create({
    //     data: {
    //         level: 'LOW',
    //         message: 'Test message',
    //         origin: 'App.ts'
    //     }
    // });

    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'LOW'
    //     }
    // });
    // console.log(logs);

    Server.start();
}