function debounce(fn) {
  let timer = null;
  const _this = this;
  return function (duration) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(_this, [...arguments].slice(1));
    }, duration);
  };
}

const test = () => {
  console.log('a');
};
const f1 = debounce(test);
f1(300);
f1(500);
