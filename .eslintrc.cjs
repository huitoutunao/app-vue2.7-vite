// 参考链接：https://github.com/vuejs/eslint-config-airbnb/blob/main/packages/eslint-config-airbnb/README.md
require('@rushstack/eslint-patch/modern-module-resolution')

const path = require('node:path')
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:vue/recommended', '@vue/eslint-config-airbnb', '@vue/eslint-config-prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-template-target-blank': 'error',
    'react/jsx-no-target-blank': 'error',
    'import/no-unresolved': 'error',
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
    }),
  },
}
