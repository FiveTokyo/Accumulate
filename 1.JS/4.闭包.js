/*
 * 定义： 闭包是当前函数执行完后，外部环境可以访问当前函数的作用域里面的变量，通常return实现，
 * * * * 也可以理解为原有的作用域链没有得到释放，依然被外部所能访问的作用于链,
 * * * * 用途： 通常可以使用计数，以前的合作式开发配合立即执行函数
 * * * * 缺点：使用不恰当会造成内存泄漏，俗称占内存。也就是保存到了window属性里面了，不会被标记清除
 */

//圣杯模式继承

const count = (function () {
  let initial = 0;
  return function (number) {
    initial = initial + number;
    return initial;
  };
})();
console.log('count(4);', count(4));
console.log('count(4);', count(4));
