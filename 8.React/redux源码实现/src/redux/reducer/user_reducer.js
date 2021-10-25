/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 17:41:22
 * @LastEditTime: 2021-09-27 18:34:04
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/reducer/user_reducer.js
 */
const { USER_INFO } = require('../action/actionType');

const defaultState = {
  name: '张三',
  iphone: '10086',
};

module.exports = function user(state = defaultState, { type, payload }) {
  if (type === USER_INFO) {
    return {
      ...state,
      ...payload,
    };
  }
  return state;
};
