/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 16:27:37
 * @LastEditTime: 2021-09-27 18:35:31
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/conbineReducers.js
 */
// function conbineReducer(reducers) {
//   // Validatereducer(reducer);
//   return function (state = {}, action) {
//     const newState = {};
//     for (const key in reducers) {
//       if (Object.hasOwnProperty.call(reducers, key)) {
//         const reducer = reducers[key];
//         newState[key] = reducer(state[key], action);
//       }
//     }
//     return newState;
//   };
// }

module.exports = function conbineReducer(reducers) {
  return function (state = {}, action) {
    const newState = {};
    for (const key in reducers) {
      if (Object.hasOwnProperty.call(reducers, key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action);
      }
    }
    return newState;
  };
};
