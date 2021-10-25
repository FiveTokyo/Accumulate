/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 11:16:54
 * @LastEditTime: 2021-10-17 17:52:51
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/createStore.js
 */

function isPlainObject(obj) {
  if (typeof obj !== 'object') {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}

function getRandomString(length) {
  return Math.random().toString(36).substr(2, length);
}

const enhancer = require('./enhancer.js');

module.exports = function createStore(reducer, defaultState, enhanced) {
  if (typeof defaultState === 'function') {
    enhanced = defaultState;
    defaultState = undefined;
  }
  if (typeof enhanced === 'function') {
    return enhancer(createStore)(reducer, defaultState);
  }

  let currentState = defaultState,
    currentReducer = reducer,
    listeners = [];

  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new TypeError('action must be a plainObject');
    }
    if (typeof action === 'undefined') {
      throw new TypeError('action must be a property of type');
    }
    currentState = currentReducer(currentState, action);
    listeners.forEach((listener) => {
      listener();
    });
  }
  dispatch({
    type: `@redux/INIT ${getRandomString(7)}`,
  });

  function getState() {
    return currentState;
  }
  function subscribe(listener) {
    listeners.push(listener);
    let isRemove = false;
    return function () {
      if (isRemove) {
        return;
      }
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
      isRemove = true;
    };
  }
  return {
    dispatch,
    subscribe,
    getState,
  };
};

// function bindActionCreator(action, disptach) {
//   return function (...args) {};
// }

// const store = createStore(reducer, 1);
// const addDispatch = bindActionCreators(addAction, store.dispatch);
// addDispatch(5);
// console.log('state', store.getState());
// const listener = store.subscribe(function () {
//   console.log(store.getState());
// });
// store.dispatch(addAction(3));
// listener();
// store.dispatch(addAction(3));
// console.log(store.getState());
function newObject(func, ...args) {
  console.log('arguments', arguments.length);
  const obj = Object.create(func.prototype);
  console.log('args', args);
  console.log('...args', ...args);
  const _this = func.call(obj, ...args);

  return _this;
}

// newObject(function A() {}, 1, 2);

function parseString(string, obj) {
  let string1 = string;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      const reg = new RegExp('{{' + key + '}}', 'g');
      console.log('reg:', reg);
      //   console.log(string1.replace(reg, element));
      console.log('element', element);
      string1 = string1.replace(reg, element);
    }
  }
  return string1;
}
// console.log(parseString('a等于{{a}}', { a: 1 }));

function myInstance(left, right) {
  let proto = left._proto_;
  while (proto != null) {
    if (proto == right.prototype) return true;
    proto = proto._proto_;
  }
  return false;
}

function Test() {}
const arr = new Test();

console.log(myInstance(arr, Test));
console.log(arr._proto_, Test.prototype);
