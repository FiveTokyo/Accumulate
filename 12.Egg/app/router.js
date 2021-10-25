/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-06-21 19:03:52
 * @LastEditTime: 2021-06-24 17:36:20
 * @LastEditors: Tokyo
 * @FilePath: /Study_Demo/Study_Egg/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.post('/user/create', controller.user.createUser);
};
