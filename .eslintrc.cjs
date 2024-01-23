module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    localforage: true,
    SparkMD5: true,
    WebFont: true,
    Handsontable: true,
    XLSX: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 1,
  },
};
