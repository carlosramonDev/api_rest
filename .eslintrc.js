module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off'
    'linebreak-style': ['error', 'unix'],
    'import/first': 'off',
    'camelcase': 'off'
  },
};
