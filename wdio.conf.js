exports.config = {
    runner: 'local',
    specs: [
        './client/test/features/**/*.feature'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['allure'],
    cucumberOpts: {
        timeout: 60000,
        compiler: ['ts:ts-node/register'],
        require: [
            './client/test/steps/given.ts',
            './client/test/steps/then.ts',
            './client/test/steps/when.ts',
        ],
    }
}
