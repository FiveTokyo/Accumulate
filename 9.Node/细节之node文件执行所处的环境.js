/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-21 11:56:39
 * @LastEditTime: 2021-10-21 11:56:39
 * @LastEditors: Tokyo
 * @FilePath: /Accumulate/node/细节之node文件执行所处的环境.js
 */

//node环境中执行的js是处于在一个函数环境当中，一些变量都依赖上层函数比如常用的module.exports,
function require(modulePath) {
  //1.将modulePath转换成绝对路径 D:\app..
  //2. 判断require.cache是否存在该缓存 if(require.cache[D:\app..])
  //3.读取文件内容，包裹到一个函数当中temp中
  function temp(module, exports, require, __dirname, __filename) {
    console.log('当前模块文件路径', dirname); //内容代码
    exports.c = 3;
    module.exports = {
      a,
    };
  }
  module.exports = {};
  const exports = module.exports;

  temp.call(
    module.exports,
    module,
    exports,
    require,
    module.path,
    module.filename,
  );

  return module.exports;
}
