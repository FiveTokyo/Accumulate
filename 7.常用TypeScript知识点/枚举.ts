/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-21 11:51:47
 * @LastEditTime: 2021-10-21 12:07:50
 * @LastEditors: Tokyo
 * @FilePath: /Accumulate/typeScript/枚举.ts
 */

//演示的一个常用列子， 对一个用户的状态，还有一些页面固定title都可以用。
enum User_Info {
  disable = 0,
  normal = 1,
  member = 2,
  super_member = 3,
}

enum System_Title {
  login = '登陆',
  home = '首页',
  manage_center = '管理中心',
}
