module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    es6: true,
    jest: true,
  },
  rules: {
    semi: 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
}
