const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
// 一些常用路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  // 开启 dev source map
  devtool: 'eval-source-map',
  // 开启 webpack dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  resolve: {
    extensions: [' ', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        // 配置 preloaders，将 eslint 添加进入
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: APP_PATH,
        exclude: path.resolve(ROOT_PATH, 'node_modules')
      }, {
        // 配置 loader，将 Babel 添加进去
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: APP_PATH,
        exclude: path.resolve(ROOT_PATH, 'node_modules')
      }
    ]
  },
  // 配置 plugin
  plugins: [new HtmlwebpackPlugin({ title: 'first react app' })]
};
