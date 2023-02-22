const path = require('path');

const config = {
  context: path.resolve(__dirname, '../src/'), // 开发基础目录
  pathContentBase: path.resolve(__dirname, '../src/pages'), // devser内容来源
  pathEntry: path.resolve(__dirname, `../src/app`), // 入口文件路径
  pathTemplate: path.resolve(__dirname, `../src/index.ejs`),
  pathStaticCopy: [
    // {
    //   from: 'src/assets',
    //   to: 'assets',
    // },
    {
      from: 'public/favicon.ico',
      to: 'favicon.ico',
    },
  ], // 打包时静态文件copy路径
  pathOutput: path.resolve(__dirname, '../dist'), // 打包后文件公共目录
  filenameCss: 'css/[name].[fullhash:8].css', // 打包后css文件路径和名称
  filenameJs: 'js/[name].[fullhash:8].js', // 打包后js文件路径和名称
  resolveAlias: {
    // 别名配置
    '@': path.join(__dirname, '../src'),
  },
};

module.exports = config;
