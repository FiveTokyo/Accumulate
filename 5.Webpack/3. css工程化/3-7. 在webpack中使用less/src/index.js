/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-06-25 19:39:29
 * @LastEditTime: 2021-09-24 16:27:30
 * @LastEditors: Tokyo
 * @FilePath: /Webpack/3. css工程化/3-7. 在webpack中使用less/src/index.js
 */
// import styles from './assets/index.less';
// var div = document.getElementById('app');
// div.className = styles.main;
function mySetInterval(func, duration) {
  function time() {
    setTimeout(function () {
      func();
      time();
    }, duration);
  }
  time();
}

mySetInterval(function () {
  console.log('aa');
}, 1000);
