function mySetInterval(fn, duration) {
  let timerId = null;
  function fn1() {
    timerId = setTimeout(() => {
      fn.call(this);
      fn1();
      myClearInterval(timerId);
    }, duration);
  }
  fn1();
  return timerId;
}

function A() {
  console.log('a');
}
const timerId = mySetInterval(A, 1000);

function myClearInterval(timerId) {
  clearTimeout(timerId);
}
