/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 17:44:35
 * @LastEditTime: 2021-09-27 18:07:05
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/reducer/home_reducer.js
 */
const { HOME } = require('../action/actionType');

const defaultState = {
  adrress: '北京',
};
module.exports = function home(state = defaultState, { type, payload }) {
  if (type === HOME) {
    return {
      ...state,
      ...payload,
    };
  }
  return state;
};
