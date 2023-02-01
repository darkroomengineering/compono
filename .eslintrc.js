module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:react-hooks/recommended', 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'space-before-function-paren': 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },
  ignorePatterns: ['dist', 'node_modules', 'bundled'],
}
