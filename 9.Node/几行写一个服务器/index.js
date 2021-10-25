/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-20 21:09:07
 * @LastEditTime: 2021-10-21 00:00:50
 * @LastEditors: Tokyo
 * @FilePath: /Accumulate/node.js
 */
var express = require('express');

var app = new express();
app.use(express.static('./')); //html文件路径
app.listen(80);
