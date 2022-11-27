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
    from: path.resolve('src/js/lib'),
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
    entry: `src/${name}/main.ts`,
    template: `src/${name}/index.html`,
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json']
    },
    filename: `${name}.html`
  }
})

module.exports = {
  pages,
  productionSourceMap: false,
  // 配置 background.js
  configureWebpack: {
    entry: {
      background: './src/background/background.ts',
      menu: './src/background/menu.ts',
      main: './src/plugins/main.ts'
    },
    output: {
      filename: 'js/[name].js'
    },
    plugins,
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/.vue$/]
          }
        }
      ]
    }
  },
  // 配置 css
  css: {
    extract: {
      filename: 'css/[name].css'
    }
  }
}
