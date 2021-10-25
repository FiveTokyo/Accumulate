/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-21 12:26:06
 * @LastEditTime: 2021-10-21 12:26:06
 * @LastEditors: Tokyo
 * @FilePath: /Accumulate/3.ES6/promise.js
 */

//解决了以前函数的多层嵌套，也就是回掉地狱，同样也实现异步操作；
const pro = new Promise((res, rej) => {
  setTimeout(function () {
    res('延迟1s');
  }, 1000);
});
