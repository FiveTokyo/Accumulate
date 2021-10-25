Array.prototype.myFilter = function (func, _this) {
  const arr = this;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    const isFilter = func.call(_this, value, i, arr);

    if (isFilter) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(
  [1, 2].myFilter(function (value) {
    return value > 1;
  }),
);
