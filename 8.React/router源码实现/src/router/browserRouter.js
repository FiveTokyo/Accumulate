/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-05 17:16:42
 * @LastEditTime: 2021-10-05 17:16:42
 * @LastEditors: Tokyo
 * @FilePath: /study_react_router/src/router/browserHistory.js
 */
import React from 'react';
import { createBrowserHistory } from 'history';
import Router from './Router';

//可以根据不同的组建来传不同的history对象//react-router-dom合并了browserRouter 和 Router写法

export default function BrowserRouter(props) {
  const history = createBrowserHistory(props);
  return <Router history={history}>{props.children}</Router>;
}
