/*
 * 定义： 每个构造函数都有一个原型链，原型链是一个对象。原型链是构造函数所构造出来的对象公有祖先，
 * * * * 也就是他们的爸爸；享受他们的属性和方法（房子、车子）；构造出来的对象有个属性__proto__指向原型链）
 * * * * 原型链是es5中可以实现继承的一种方式，也相对比较完美，比如圣杯模式继承
 * * * *
 */

//圣杯模式继承

const inherit = (function () {
  function F() {}
  return function (Target, Origin) {
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constuctor = Target;
    Target.prototype.uber = Origin.prototype;
  };
})();
