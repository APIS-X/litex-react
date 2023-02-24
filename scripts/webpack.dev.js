const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = require('./config');

module.exports = merge(common, {
  mode: 'development', // 开发模式
  optimization: {
    usedExports: true, // Tree Shaking
  },
  cache: true,
  devServer: {
    host: 'local-ip',
    hot: true, // 热更新
    open: true, // 编译完自动打开浏览器
    compress: false, // 关闭gzip压缩
    port: config.port, // 开启端口号
    client: {
      progress: true,
      overlay: {
        // 编译器错误或者警告是否在浏览器中显示全屏覆盖
        warnings: false,
        errors: true,
      },
    },
    static: false,
  },
  module: {
    // 插件的执行顺序从右到左
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
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
        sideEffects: true,
        // 排除 node_modules 目录
        exclude: /node_modules/,
      },
    ],
  },
  stats: 'errors-only', // Webpack 在编译的时候只输出错误日志，终端更清爽
});
