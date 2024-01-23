// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  css: ['~/assets/reset.postcss', '~/assets/global.css'],
  /*
   * Build configuration
   * 注意： nuxt.config.postcss 和 postcss 官方使用的資料型別不一樣
   * nuxt.config.postcss 只能使用 Array
   */
  postcss: {
    plugins: {
      'postcss-initial': { reset: 'inherited' },
      'postcss-pxtorem': {
        propList: ['*'],
      },
      'postcss-preset-env': {
        stage: 0,
        features: true,
      },
    },
  },
  stylelint: {
    lintOnStart: false, // 專案啟動時不自動檢查所有相關檔案
    chokidar: true, // 監聽文件異動進行檢核（文件未列出此選項）
  },
});
