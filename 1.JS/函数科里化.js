function add() {
  var args = Array.prototype.slice.call(arguments);
  var fn = function () {
    var fn_args = Array.prototype.slice.call(arguments);
    return add.apply(null, args.concat(fn_args));
  };
  fn.valueOf = fn.toString = function () {
    return args.reduce(function (a, b) {
      return a + b;
    });
  };
  return fn;
}
+add(1, 2, 3);
function f(x, y, z) {
  return x + y + z;
}

this.curry = function (fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  const _this = this;
  return function () {
    const curArgs = Array.from(arguments);

    let totalArgs = args.push(...curArgs);
    if (totalArgs.length >= totalArgs) {
      return fn.apply(null, totalArgs);
    } else {
      totalArgs.unshift(fn);
      return _this.curry(_this, totalArgs);
    }
  };
};
const a = this.curry(f, 2);

console.log(a(1, 2));
