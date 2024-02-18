const config = {
  root: true,
  env: {
    browser: true,
    es2023: true
  },
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: '14'
  },
  rules: {
    'prettier/prettier': 'error'
  }
}

module.exports = config
