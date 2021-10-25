/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-06-25 19:39:29
 * @LastEditTime: 2021-09-25 08:16:14
 * @LastEditors: Tokyo
 * @FilePath: /Webpack/1. webpack核心功能/1-17. 其他细节配置/webpack.config.js
 */
var path = require('path');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
  },
  // externals: {
  //     jquery: "",
  //     lodash: "_"
  // },
  stats: {
    colors: true,
    modules: false,
    hash: false,
    builtAt: false,
  },
};
