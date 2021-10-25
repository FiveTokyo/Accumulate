<!--
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-21 12:08:49
 * @LastEditTime: 2021-10-21 12:11:15
 * @LastEditors: Tokyo
 * @FilePath: /Accumulate/typeScript/Ts小技巧.md
-->
## Ts使用小技巧 F2更改限制
1. 当你要更改某个ts限制类型时候，你可以双击限制类型 > 按下F2 > 更改，这样就更改完了，这样你就只需要更改定义限制，不用麻烦的更改使用限制，
2. typescript经常用的就是Props数据结构interface描述，和接口的数据用到Pick；需要多练。看文档；
3. 我碰到一个坑就是setTimeout返回的，node环境、和window环境返回不一样。window是number(ID)类型。node是一个对象