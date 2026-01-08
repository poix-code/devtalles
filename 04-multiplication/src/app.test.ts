import { ServerApp } from "./presentation/server-app";


describe('Test App.ts', () => {

  it('Should could Server.run with values', async() => {

    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = ['node', 'app.ts',
      '--b', '5',
      '--l', '10',
      '--s', 'true',
      '--n', 'table-5.txt',
      '--d', './tables'
    ];

    await import('./app');

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 5,
      limit: 10,
      showTable: true,
      fileName: 'table-5.txt',
      fileDestination: './tables'
    });

  });
  
});