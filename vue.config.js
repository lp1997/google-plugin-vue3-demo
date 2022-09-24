const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

// 复制文件到指定目录
const copyFiles = [
  {
    from: path.resolve('src/plugins/manifest.json'),
    to: `${path.resolve('dist')}/manifest.json`
  },
  {
    from: path.resolve('src/assets'),
    to: path.resolve('dist/assets')
  },
  {
    from: path.resolve('src/js/lib/jquery-2.1.3.min.js'),
    to: path.resolve('dist/js')
  },
  {
    from: path.resolve('src/plugins/main.js'),
    to: path.resolve('dist/js')
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
    entry: `src/${name}/main.js`,
    template: `src/${name}/index.html`,
    filename: `${name}.html`
  }
})

module.exports = {
  pages,
  productionSourceMap: false,
  // 配置 background.js
  configureWebpack: {
    entry: {
      background: './src/background/background.js',
      menu: './src/background/menu.js'
    },
    output: {
      filename: 'js/[name].js'
    },
    plugins
  },
  // 配置 css
  css: {
    extract: {
      filename: 'css/[name].css'
    }
  }
}
