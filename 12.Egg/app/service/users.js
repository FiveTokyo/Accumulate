/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-06-22 20:42:52
 * @LastEditTime: 2021-10-04 08:40:52
 * @LastEditors: Tokyo
 * @FilePath: /Study_Egg/app/service/users.js
 */
const Service = require('egg').Service;
// const utils = require('../utils/index');
// const Sequelize = require('sequelize');
// const { sqlMango } = require('../utils/index');
const uuid = require('uuid');
class Users extends Service {
  async createUser(entity) {
    try {
      console.log('serviceUsers');
      console.log('this.ctx.model', this.ctx.model);
      const result = await this.ctx.model.Users.create({
        ...entity,
      });
      console.log('result', result);
      return result;
    } catch (err) {
      throw err;
    }
  }

  // async getUserList(entity) {
  //   try {
  //     const result = await this.ctx.model.User.finAll({

  //     });
  //     return result;
  //   } catch (err) {
  //     throw err;

  //   }
  // }
}

module.exports = Users;
