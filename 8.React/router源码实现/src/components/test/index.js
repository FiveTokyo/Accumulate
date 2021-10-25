/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-06 17:19:55
 * @LastEditTime: 2021-10-06 17:20:59
 * @LastEditors: Tokyo
 * @FilePath: /study_react_router/src/components/test/index.js
 */
import React from 'react';

function test(props) {
  props.a.a = 3;
  console.log('testProps:', props);
  return <div></div>;
}

export default test;
