/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-21 11:49:50
 * @LastEditTime: 2021-10-21 11:49:50
 * @LastEditors: Tokyo
 * @FilePath: /Accumulate/typeScript/常用类型.ts
 */
type Pick<T, K extends keyof T> = {
  [p in K]: T[K];
};
