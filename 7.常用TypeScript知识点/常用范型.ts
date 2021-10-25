/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-21 11:49:26
 * @LastEditTime: 2021-10-21 11:49:26
 * @LastEditors: Tokyo
 * @FilePath: /Accumulate/typeScript/范型.ts
 */
//通常用于作为类，函数的参数，类型别名的类型描述
import React from 'react';

type Pick<T, K extends keyof T> = {
  [p in K]: T[K];
};

interface IProps {
  name: 'asd';
}

export default function test<IProps>(props) {
  return <div></div>;
}
