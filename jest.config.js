export default {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(jpg|ico|jpeg|png|gif|eot|svg|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'jest-svg-transformer',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleDirectories: ['<rootDir>/src', 'node_modules'],
};

