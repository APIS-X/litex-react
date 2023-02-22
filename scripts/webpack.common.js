const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const pkgJSON = require('../package.json');
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
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
      template: path.resolve(__dirname, '../public/index.html'),
      title: pkgJSON.name,
      meta: {
        description: {
          type: 'description',
          content: pkgJSON.description,
        },
      },
      minify: 'auto',
    }),
    new ProgressBarPlugin({
      format: `:msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    }),
  ],
};
