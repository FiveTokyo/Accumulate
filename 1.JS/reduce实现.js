Array.prototype.myReduce = function (func, initailvalue) {
  const arr = this;
  let account = initailvalue;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof account == 'undefined' && i === 0) {
      account = arr[0];
      //   break;
    } else {
      account = func(account, value, i, arr);
    }
  }
  return account;
};

console.log(
  [2, 1].myReduce(function (acc, value, i, arr) {
    return acc + value;
  }, 1),
);
