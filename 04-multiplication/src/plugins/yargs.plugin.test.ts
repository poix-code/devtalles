const runCommand = async(args: string[]) => {
    process.argv = [...process.argv, ...args];

    const { yarg } = await import('./yargs.plugin');

    return yarg;
}

describe('Test yargs plugin', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });

  test('Should return default values', async() => {
    const argv = await runCommand(['-b', '5']);
    expect(argv).toEqual(expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: 'multiplication-table',
        d: 'outputs'
    }));
  });

  test('Should return configuration with custom values', async() => {
    const argv = await runCommand(['-b', '3', '-l', '10', '-s', '-n', 'table-of-3', '-d', 'tables']);
    expect(argv).toEqual(expect.objectContaining({
        b: 3,
        l: 10,
        s: true,
        n: 'table-of-3',
        d: 'tables'
    }));

  });
  
});