## 脚本注入攻击
1. 注入script文件， 通过document.cookie获取cookie来窃取用户cookie，从而获取用户信息
2. 防范：
   1. 使用jsx，jsx会把html标签的<>解析转化为字符串
   2. 使用正则过滤
   3. 设置cookie http oly属性为true，只通过访问接口，头带cookie,不可以通过docoment.cookie获取。