module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:cypress/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue',
    'cypress'
  ],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': 'off',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error'
  }
};
