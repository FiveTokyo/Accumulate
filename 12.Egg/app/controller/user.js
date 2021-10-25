/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-06-21 19:03:52
 * @LastEditTime: 2021-10-04 08:39:21
 * @LastEditors: Tokyo
 * @FilePath: /Study_Egg/app/controller/user.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async createUser() {
    const { ctx } = this;
    let newEntity = this.ctx.request.body;
    try {
      const entity = await ctx.service.users.createUser(newEntity);
      console.log('entity', entity);
      ctx.body = {
        data: entity,
        code: 200,
        message: '请求成功',
      };
    } catch (ex) {
      ctx.logger.error('user.createUser调用异常/user.createUser', ex);
      ctx.body = {
        message: ex,
        code: 500,
        data: null,
      };
    }
  }

  // async getUserList() {
  //   const { ctx } = this;
  //   let params = this.ctx.request.query;
  //   try {
  //     const entity = await this.ctx.service.user.getUserList(params);
  //     this.ctx.body = {
  //       data: entity,
  //       code: 200,
  //       message: '请求成功',
  //     };
  //   } catch (ex) {
  //     this.ctx.logger.error('test.getUserList调用异常/user.create', ex);
  //     this.ctx.body = {
  //       message: ex,
  //       code: 500,
  //       data: null,
  //     };
  //   }
  // }
}

module.exports = HomeController;
