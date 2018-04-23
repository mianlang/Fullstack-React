const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
// 一些常用路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    main: path.resolve(ROOT_PATH, 'main.jsx'),
  },
  output: {
    path: BUILD_PATH,
    filename: 'index.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // 开启 dev source map
  devtool: 'cheap-module-eval-source-map',
  // 开启 webpack dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: ROOT_PATH,
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
      },
      {
        test: /\.css$/,
        include: APP_PATH,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // 配置 plugin
  plugins: [new HtmlwebpackPlugin({ title: 'MY react app' })],
};
