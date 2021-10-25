//改变this指向，接受参数多个（this, a, b, c）
Function.prototype.myCall = function (obj, ...args) {
  const _this = this;
  const randomAttribute = Math.random().toString(36).slice(2, 8); //随机字符串
  obj[randomAttribute] = _this;
  obj[randomAttribute](...args);
  delete obj[randomAttribute];
};
function A(a, b) {
  console.log(this);
}

const a = {
  a: 5,
  b: 6,
};
