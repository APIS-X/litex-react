const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除历史文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css抽离
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 静态文件复制
const TerserPlugin = require('terser-webpack-plugin'); // 源代码压缩

const config = require('./config');

const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      /**
       * initial 入口 chunk，对于异步导入的文件不处理
       * async 异步 chunk，只对异步导入的文件处理
       * all 全部 chunk
       */
      chunks: 'all',
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: 'vendor', // chunk 名称
          priority: 1, // 权限更高，优先抽离，重要！！！
          test: /node_modules/, // 一般第三方模块都是从node_modules引进来如lodash
          minSize: 0, // 大小限制
          minChunks: 1, // 最少复用过几次
        },
        // 公共的模块
        common: {
          name: 'common', // chunk 名称
          priority: 0, // 优先级
          minSize: 0, // 公共模块的大小限制
          minChunks: 2, // 公共模块最少复用过几次
        },
      },
    },
    usedExports: true,
    minimize: true,
    minimizer: [
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
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }), // 清除历史打包文件
    new CopyWebpackPlugin({
      // 打包静态文件copy
      patterns: config.pathStaticCopy,
    }),
    new MiniCssExtractPlugin({
      filename: config.filenameCss,
    }),
  ],
  stats: {
    cachedModules: true,
    preset: 'minimal',
    moduleTrace: true,
    errorDetails: true,
  },
});
