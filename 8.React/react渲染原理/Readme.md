1. 推荐文档： [渲染原理]https://cloud.tencent.com/developer/article/1520009
2. 个人总结
   1. 首先会把JSX语法转化为react元素，通过React.CreateElement()来实现。一般情况babel（transform-react）插件帮我们处理好了;
   2. 转化为react元素后（很多人都以为这个是虚拟dom，其实不是，不过很像，虚拟dom{tag,prop,children,type:{FunctionComponent ，classComponent, dom , text,}），然后根据该元素转化为fiber链式Node节点并保存（虚拟dom结构优化后的结构fiber数据结构（fiberNode对象属性{stateNode、return、child、sibling}）、reconciler调度（diff对比阶段可根据任务优先级终止）处理、commit（更换root）、和浏览器的requestIdlCallback函数空闲函数配合处理优先级低的任务）,并保存改fiber对象
   
   3. 初始渲染：ReactDom.render()根据fiber节点类型创建相应的dom对象，以空节点为出口 
   * 1. 根据节点类型做相应创建 =》
   * 2. 如果是空节点什么都不做 =》
   * 3. 如果是dom节点，根据document.createElement创建真实dom，并遍历children属性节点回到第一步 =》
   * 4. 如果是文本节点就创建一个document.createTextNode创建一个文本节点对象 =》 如果是数组节点就遍历节点回到第一步继续开始 =》
   * 5. 如果是函数节点，执行难该函数，把返回的节点又继续回到第一步；遍历完后把该函数的effect推到一个effect list事件队列中等待执行 =》 
   * 6. 如果是类节点，实例化该类节点，调用生命周期方法 getDerivedStateFromProps,执行render方法把返回的节点又回到第一步，render结束后把componentDidmount放到一个执行队列当中等待执行（子组件的componentDidmount函数永远比父组件先执行，因为优先放入执行队列的时候，父组件还在render阶段；）；=》
   * 7. 等所有的遍历完成后会把总的id为app的dom body.appendChild(app)插入到页面中，componentDidmount在依次执行，effectlist在依次执行（effect的执行时机是componentDidUpdate）；

   4. 更新渲染
   * 首先假设节点所在的树的层级不发生变化，根据不同的节点类型的数据结构进行判断，先找出之前的树的相同层级，然后再同层级上寻找对应层级id(也就是O3变On的时间复杂度，以前是递归对比虚拟dom树)
   * 1. 节点类型相同的情况
   *  dom节点：保留dom对象，记录该属性变化，并遍历children属性，递归回到第一步对比更新
   *  文本节点： 保留文本对象 记录该属性变化
   *  函数节点： 执行该函数render方法，并依次执行之前effect list的返回函数，把本次effect推到effct list等待执行
   *  类节点 重用上次实例化的对象，调用 getDerivedStateFromProps， shouldComponentupdate根据这个生命钩子函数决定要不要更新进行下一步；如果为true，进行下一步，调用render方法，返回的节点递归对比更新，render结束后吧把getSnapshotBeforeUpdate、componentDidupdate 分别放到执行队列中，等待更新完，dom挂载执行
   * 2. 节点类型不同的情况
   *  dom节点，删除，创建新节点回到初始渲染的操作
   *  文本节点 删除，创建新节点回到初始渲染的操作
   *  函数节点 执行该函数，如果是新的函数节点，执行新的函数render方法把返回的节点进行遍历在根绝之前的初始渲染操作，在执行旧函数的卸载节点方法也就是旧的函数effect的返回函数。在把新的函数effect推到effect list中等待更新执行，跟初始渲染相差不大。不过是先render新的函数节点。在卸载旧的。
   *  类节点 依次递归删除节点，把卸载钩子函数推执行
   * 3. 如果是兄弟节点， key值比较的话
   * 找到之前对应的key节点。如果相同的话进入对比更新，如果没找到，直接创建，进入下一步
   * 进行移位操作，记录lastIndex（遍历的节点且没有更换位置的索引）、nextIndex(当前索引)、mountindex(旧的节点索引)。如果lastIndex > mounIndex会进行移位操作；否则不动，具体可以观看技术博客；这样移位是减少dom操作
   5. 对比更新完成

  



