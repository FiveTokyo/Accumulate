/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-10 13:48:22
 * @LastEditTime: 2021-10-10 13:50:27
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/createThunkmiddleware.js
 */
function createThunkmiddleware() {
  return (store) => (next) => (action) => {
    if (typeof action === 'action') {
      return action(store.dispatch, store.getState, extra);
    }
    return next(action);
  };
}
