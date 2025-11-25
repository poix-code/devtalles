import { getUUID } from "../plugins/get-id.plugin";

describe('plugins/get-id.plugin.ts', () => {

    test('getUUID should return a string', () => {
        const uuid = getUUID();
        expect(typeof uuid).toBe('string');
    });

    test('getUUID should return different UUIDs on multiple calls', () => {
        const uuid1 = getUUID();
        const uuid2 = getUUID();
        expect(uuid1).not.toBe(uuid2);
    });
});
