module.exports = {
  preset: 'react-native',
  clearMocks: true,
  setupFilesAfterEnv: ['./jest/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|native-base|react-native-markdown-display)/).*/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$':
      '<rootDir>/__mocks__/file.js',
  },
}
