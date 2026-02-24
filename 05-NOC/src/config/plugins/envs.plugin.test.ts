import { envs } from "./envs.plugin";

describe('envs.plugin.ts', () => {

    test('Should return envs options', () => {
        expect(envs).toEqual({
            PORT: 300,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'juanuribe513@gmail.com',
            MAILER_SECRET_KEY: '123456',
            PROD: false,
            MONGO_URL: 'mongodb://juanuribe513:123456789@localhost:27017/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'juanuribe513',
            MONGO_PASSWORD: '123456789',
            POSTGRES_URL: 'postgresql://postgres:123456789@localhost:5432/NOC',
            POSTGRES_USER: 'postgres',
            POSTGRES_DB: 'NOC-TEST',
            POSTGRES_PASSWORD: '123456789'
        });
    });

    test('Should return error if not found an env variable', async() => {
        jest.resetModules();
        process.env.PORT = 'ABC';
        try {
            await import('./envs.plugin');
            expect(true).toBe(false);
        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }
    });
})