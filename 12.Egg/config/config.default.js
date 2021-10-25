/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-06-21 19:03:52
 * @LastEditTime: 2021-06-24 17:32:59
 * @LastEditors: Tokyo
 * @FilePath: /Study_Demo/Study_Egg/config/config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1624273322759_4959';

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'Learn1_test',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '865702308',
    timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    dialectOptions: {
      // 让读取date类型数据时返回字符串而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
    pool: {
      max: 100,
      min: 0,
      // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
      acquire: 100 * 1000,
    },
  };
  // add your middleware config here
  config.middleware = [];
  config.cors = {
    origin: '*',
  };
  config.security = {
    ctoken: true,
    domainWhiteList: ['http://localhost:8000'],
    csrf: {
      enable: false, // 开发环境下关闭
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
      ignore: '/api/mqtt',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.middleware = [
    'errorHandler',
    // 'xtplExtend',
    // 'userService',
    // 'toolUtils',
  ];

  return {
    ...config,
    ...userConfig,
  };
};
