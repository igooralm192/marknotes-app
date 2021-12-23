module.exports = {
  preset: 'react-native',
  clearMocks: true,
  setupFilesAfterEnv: ['./jest/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|native-base|)/).*/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
