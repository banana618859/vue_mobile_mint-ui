/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2021-01-20 20:21:41
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-01-20 20:27:26
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
