# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## TODO

- 以下 packages 尚未升級成最新
    - stylelint: 由於 `@nuxtjs/stylelint-module` 目前只支持到 `stylelint@15` 暫時不升級
    - stylelint-config-recommended: 由於 `stylelint@15` 只能支持到 `stylelint-config-recommended@13` 暫時不升級

## NOTE

注意本專案使用 [prettier] 做 format，有以下幾點 `vscode` 設定需要注意
```json
{
  ...
  "editor.formatOnSave": false, // 關閉保存時候 format 避免干擾
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 使用 prettier 進行 format
  ...
}
```

### 安裝套件作用簡介

> [eslint-config-prettier]

用於關閉不必要或可能和 [prettier] 造成衝突的規則

> [eslint-plugin-prettier]

讓 [prettier] 能使用 eslint 規則

> [postcss-html]

使 HTML-like 的檔案（e.q. vue, jsx, html）能使用 postcss 語法。
此雖然為 postcss 的 plugin 但由於是為了讓 stylelint 能辨識 HTML-like，所以需要在 .stylelintrc 中設定 `"customSyntax": "postcss-html"`。

> [postcss-pxtorem]

***注意：在 `nuxt.config` 中 postcss config 設定的規則可能和 postcss 本身的規則不太一樣***

可以將 px 直接轉成 rem 的 postcss 插件，需要在 `nuxt.config` 中的 `postcss` 屬性中設定

> [stylelint-order]

用於排序 css style 屬性，需要在 `.stylelintrc` 中設定。
詳細設定請參考 [stylelint-order]
https://github.com/hudochenkov/stylelint-order?tab=readme-ov-file#readme

> [stylelint-prettier]

讓 [prettier] 能使用 stylelint 規則


[prettier]:(https://prettier.io/)
[eslint-config-prettier]:(https://github.com/prettier/eslint-config-prettier)
[eslint-plugin-prettier]:(https://github.com/prettier/eslint-plugin-prettier)
[postcss-html]:(https://github.com/ota-meshi/postcss-html)
[postcss-pxtorem]:(https://github.com/cuth/postcss-pxtorem)
[stylelint-order]:(https://github.com/hudochenkov/stylelint-order)
[stylelint-prettier]:(https://github.com/prettier/stylelint-prettier)
