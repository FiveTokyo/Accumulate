/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-21 12:25:54
 * @LastEditTime: 2021-10-21 12:25:54
 * @LastEditors: Tokyo
 * @FilePath: /Accumulate/3.ES6/async & await.js
 */
//可以使promise任务变成同步执行,函数本身是异步执行。但是通过await函数的内部变成同步
async function delay(duration) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
      console.log('延迟' + `${duration}ms`);
    }, duration);
  });
}

async function test() {
  console.log('a');
  await delay(1000);
  new Promise((res, rej) => {
    res(1);
  }).then((data) => {
    console.log('data:', data);
  });
}
console.log('b');
test();
console.log('c');
