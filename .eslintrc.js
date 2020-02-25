module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": ["off"], // ~https://eslint.org/docs/rules/no-console
    "padded-blocks": ["off"], // ~https://eslint.org/docs/rules/padded-blocks
  },
};
