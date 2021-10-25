1. **connect** 高阶组件（**类组件使用的装饰器模式**）会链接一个上下文对象也就是包裹app的**provider**组件的store对象获取到
2. 该组件会会把映射的状态、dispatch函数（传给包裹的组件，然后通过props获取），分发函数就是吧action变成reducer函数类型bindActionACreators函数；
3. 并且再该函数的componentDidmount钩子函数中使用**store.listen( () => {this.state = store.getState()}**;),只要你分发action函数就会触发该组件的更新，也就是说redux本质还是改变state状态来更新；接下来他会通过shouldComponentUpdate这个组件来判断更改之前状态和更改后的差异对比。来决定是否更新；
4. 所以当每个组件用到共享状态时都会更新，高阶组件和装饰这模式，还有发布订阅者模式都起到了很大的作用；
5. 其实context对 react起到了很大的作用，还有后面router也用到了他