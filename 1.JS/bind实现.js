//改变this指向，接受参数两个（this, arr）
Function.prototype.myBind = function (obj, ...args) {
  const _this = this;
  const arg = [...args].slice(1);
  return function () {
    _this.apply(obj, arg.concat([...arguments]));
  };
};
const a = 8;
function A(b) {
  console.log('this.a', this.a, b);
}
const b = {
  a: 6,
};

A.myBind(b)(8);
