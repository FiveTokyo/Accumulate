/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-28 16:52:57
 * @LastEditTime: 2021-10-17 17:47:59
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/enhancer.js
 */
// export default function (...middlewares) {
//   return function (createStore) {};
// }

function loggerMiddleware1(store) {
  return function (next) {
    return function (action) {
      console.log('a');
      next(action);
      console.log('aa');
    };
  };
}

function loggerMiddleware2(store) {
  return function (next) {
    return function (action) {
      console.log('b');
      next(action);
      console.log('bb');
    };
  };
}

// compose([loggerMiddleware1(), loggerMiddleware2()])(function () {
//   console.log('初始化dispatch');
// })();

// function applyMiddleware(...middlewares) {
//   return function (crerateStore) {
//     return function (reducer, initailState) {
//       const store = crerateStore(reducer, initailState);
//       let dispatch = () => {
//         throw new Error('初始化，不能使用');
//       };
//       const singleStore = {
//         dispatch: (...args) => dispatch(...args),
//         getState: store.getState,
//       };
//       const dispatcherProducer = middlewares.map((mid) => mid(singleStore));
//       dispatch = compose(dispatcherProducer);
//       return { ...store, dispatch };
//     };
//   };
// }

const applyMiddleware = function (middlewares) {
  return function (createStore) {
    return (reducer, state) => {
      const store = createStore(reducer, state);
      let dispatch = () => {
        throw new error('尚未初始化');
      };
      const singleStore = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args),
      };
      const dispatcher = middlewares.map((middleware) =>
        middleware(singleStore),
      );
      dispatch = compose(dispatcher);
      return {
        ...store,
        dispatch,
      };
    };
  };
};
module.exports = applyMiddleware(loggerMiddleware1, loggerMiddleware2);

// const compose = function (funcArr) {
//   return funcArr.reduce(
//     (a, b) =>
//       (...args) =>
//         a(b(...args)),
//   );
// };

function compose(funcArr) {
  //   return funcArr.reduce(
  //     (a, b) =>
  //       (...args) =>
  //         a(b(...args)),
  //   );
  let lastreturn = null;
  return function (...args) {
    for (let i = funcArr.length - 1; i > -1; i--) {
      const func = funcArr[i];
      if (i === funcArr.length - 1) {
        lastreturn = func(...args);
      } else {
        lastreturn = func(lastreturn);
      }
    }
    return lastreturn;
  };
}
// const a = compose([
//   function (a = 0) {
//     return 1 + a;
//   },
//   function (a = 0) {
//     return 2 + a;
//   },
// ]);
// console.log(a());
