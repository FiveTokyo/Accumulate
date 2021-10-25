function throttle(fn) {
  const _this = this;
  let timer = null;
  return function (duration) {
    if (timer == null) {
      timer = setTimeout(() => {
        timer = null;

        fn.apply(_this, [...arguments].slice(1));
      }, duration);
    }
  };
}
const test = () => {
  console.log('a');
};
const fn1 = throttle(test);
fn1(1000);
