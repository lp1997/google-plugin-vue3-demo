const CopyWebpackPlugin = require('copy-webpack-plugin')
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

// 复制文件到指定目录
const distFileName = process.env.NODE_ENV === 'production' ? 'dist' : 'dist_local'
const copyFiles = [
  {
    from: path.resolve('src/plugins/manifest.json'),
    to: `${path.resolve(distFileName)}/manifest.json`
  },
  {
    from: path.resolve('src/assets'),
    to: path.resolve(distFileName + '/assets')
  },
  {
    from: path.resolve('src/devtools/devtools.html'),
    to: path.resolve(distFileName + '/')
  }
]

// 复制插件
const plugins = [
  new CopyWebpackPlugin({
    patterns: copyFiles
  })
]

// 页面文件
const pages = {}
// 配置 popup.html 页面
const chromeName = ['popup']

chromeName.forEach(name => {
  pages[name] = {
    entry: `src/${name}/main.ts`,
    template: `src/${name}/index.html`,
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json']
    },
    filename: `${name}.html`
  }
})

module.exports = defineConfig({
  // 选项
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 构建时的输出目录
  outputDir: distFileName,
  // 放置静态资源的目录
  // assetsDir: 'static',
  // html 的输出路径
  // indexPath: 'index.html',
  // 文件名哈希
  filenameHashing: false,
  // 用于多页配置，默认是 undefined
  pages: pages,
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: false,
  // 是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  // babel-loader 默认会跳过 node_modules 依赖。
  transpileDependencies: true/* [ string or regex] */,
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  crossorigin: '',
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  integrity: false,
  // 调整内部的 webpack 配置
  configureWebpack: {
    entry: {
      background: './src/background/background.ts',
      menu: './src/background/menu.ts',
      main: './src/plugins/main.ts',
      devtools: './src/devtools/devtools.ts'
    },
    plugins,
    output: {
      filename: 'js/[name].js'
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@popup': path.join(__dirname, 'src/popup')
      }
    }
  }, // (Object | Function)
  chainWebpack: config => {
  },
  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,
    // 是否开启 CSS source map？
    sourceMap: false,
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // Css-loader 时，使用 `{ Css: { ... } }`。
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    // modules: false
  },
  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,
  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    // open: false,
    // host: '0.0.0.0',
    // port: 9000,
    // https: false,
    // hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: { // 接口跨域代理
      '/api': {
        target: '/',
        changeOrigin: true,
        // secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    } // string | Object
  },
  // 三方插件的选项
  pluginOptions: {
  }
})
