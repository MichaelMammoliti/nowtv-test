module.exports = {
  setupFiles: ['<rootDir>/tests/setup.js'],
  moduleFileExtensions: ['js'],
  moduleDirectories: [
    'node_modules',
    'app/client',
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: ['app/**/*.{js,jsx}'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};
