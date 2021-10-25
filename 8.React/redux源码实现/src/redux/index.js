/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-09-27 18:00:46
 * @LastEditTime: 2021-09-27 18:37:28
 * @LastEditors: Tokyo
 * @FilePath: /study_redux/src/redux/index.js
 */
const bindActionCreators = require('./bindActionCreators');
const conbineReducers = require('./conbineReducers');
const createStore = require('./createStore');

const homeReducer = require('./reducer/home_reducer');
const userReducer = require('./reducer/user_reducer');

const homeAction = require('./action/home_action');
const userAction = require('./action/user_action');

const initialReducer = conbineReducers({ homeReducer, userReducer });

const store = createStore(initialReducer, {});

console.log(store.getState());

const actionDispatch = bindActionCreators(
  { userAction, homeAction },
  store.dispatch,
);
actionDispatch.userAction({ name: 'Tokyo', iphone: '10011' });

console.log(store.getState());
