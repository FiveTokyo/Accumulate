/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 17:45:38
 * @LastEditTime: 2021-09-27 17:57:50
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/action/home_action.js
 */
const { HOME } = require('./actionType');
module.exports = function home(params) {
  return {
    type: HOME,
    payload: params,
  };
};
