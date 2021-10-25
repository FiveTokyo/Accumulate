/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 17:45:49
 * @LastEditTime: 2021-09-27 17:57:54
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/action/user_action.js
 */
const { USER_INFO } = require('./actionType');
module.exports = function home(params) {
  return {
    type: USER_INFO,
    payload: params,
  };
};
