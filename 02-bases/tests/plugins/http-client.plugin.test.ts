import { httpClientPlugin } from "../plugins/http-client.plugin";

describe('plugins/http-client.plugin.ts', () => {

    test('httpClientPlugin.get() should return a string', async () => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: expect.any(Boolean),
        });
    });

    test('httpClientPlugin.post() should throw "Not implemented yet" error', async () => {
        await expect(httpClientPlugin.post('https://jsonplaceholder.typicode.com/todos', { title: 'foo', body: 'bar', userId: 1 }))
            .rejects
            .toThrow('Not implemented yet');
    });

    test('httpClientPlugin.put() should throw "Not implemented yet" error', async () => {
        await expect(httpClientPlugin.put('https://jsonplaceholder.typicode.com/todos/1', { id: 1, title: 'foo', body: 'bar', userId: 1 }))
            .rejects
            .toThrow('Not implemented yet');
    });

    test('httpClientPlugin.delete() should throw "Not implemented yet" error', async () => {
        await expect(httpClientPlugin.delete('https://jsonplaceholder.typicode.com/todos/1'))
            .rejects
            .toThrow('Not implemented yet');
    }); 
});