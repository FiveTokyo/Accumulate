## 推荐技术博客
1. [Hooks原理]https://juejin.cn/post/6944863057000529933#heading-8
## 个人总结
1. 每使用一个hooks时，都会创建一个hooks对象记录当前的信息，hooks：{memozeite: state or effect,queue，baseState}等属性,然后会把创建hooks信息依次根据编写位置存放到一个workInProgressHooks的链表结构中，获取最新hooks信息便是从这里获取；这也是为什噩梦不能在if或者循环中使用，破坏链表结构，查找不是对应的hooks信息；hooks信息顺序错乱；