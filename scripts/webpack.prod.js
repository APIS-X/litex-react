const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除历史文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css抽离
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 静态文件复制
const TerserPlugin = require('terser-webpack-plugin');

const config = require('./config');

const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'less-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // 清除历史打包文件
    new CopyWebpackPlugin({
      // 打包静态文件copy
      patterns: [
        // {
        //   from: settings.pathStaticCopy[0],
        //   to: settings.pathStaticCopy[1],
        // },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: config.filenameCss,
    }),
  ],
});
