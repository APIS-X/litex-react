const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const pkgJSON = require('../package.json');
const config = require('./config');

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

module.exports = {
  entry: config.pathEntry,
  output: {
    filename: config.filenameJs,
    path: config.pathOutput,
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.less'],
    alias: config.resolveAlias,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.txt$/,
        use: ['raw-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            // 图片文件小于8k时编译成dataUrl直接嵌入页面，超过8k回退使用file-loader
            loader: 'url-loader',
            options: {
              limit: 8192, // 8k
              name: '[name].[ext]', // 回退使用file-loader时的名称
              fallback: 'file-loader', // 当超过8192byte时，会回退使用file-loader
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // 定义在代码中可以替换的一些常量
      __DEV__: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      template: config.pathTemplate,
      title: pkgJSON.name,
      meta: {
        keywords: {
          name: 'keywords',
          content: pkgJSON.keywords,
        },
        description: {
          type: 'description',
          content: pkgJSON.description,
        },
      },
      minify: 'auto',
    }),
    new WebpackBar({
      // color: '#85d', // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
  ],
};
