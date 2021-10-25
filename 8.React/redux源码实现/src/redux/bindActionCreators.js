/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 16:27:30
 * @LastEditTime: 2021-09-27 17:35:29
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/bindActionCreators.js
 */
module.exports = function bindActionCreators(actionCreator, dipatch) {
  if (typeof actionCreator === 'function') {
    return getAutoDispatchActionCreator(actionCreator, dipatch);
  } else if (typeof actionCreator === 'object') {
    const result = {};
    for (const key in actionCreator) {
      if (Object.hasOwnProperty.call(actionCreator, key)) {
        const action = actionCreator[key];
        if (typeof action === 'function') {
          return getAutoDispatchActionCreator(action, dipatch);
        }
      }
    }
  }
};

function getAutoDispatchActionCreator(actionCreator, dispatch) {
  return function (...args) {
    const action = actionCreator(...args);
    dispatch(action);
  };
}
