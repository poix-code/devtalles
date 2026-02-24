import { set } from "mongoose";
import { CronService } from "./cron-service";

describe('CronService', () => {

    const mockOnTick = jest.fn();

    test('Should create a job', (done) => {
        const job = CronService.createJob('* * * * * *', mockOnTick);
        setTimeout(() => {
            expect(mockOnTick).toHaveBeenCalledTimes(2);
            job.stop();
            done();
        }, 2000);
    });
});