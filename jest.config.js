module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\.ts$': 'ts-jest',
        '^.+\.tsx$': 'ts-jest',
    },
    testMatch: ['/tests//*.test.js'], // Certifique-se de que esta linha está correta
    testPathIgnorePatterns: ['/node_modules/'],
};
