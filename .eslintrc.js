module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    es6: true,
    jest: true,
  },
  rules: {
    semi: 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
}
