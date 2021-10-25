import React from 'react';
import ctx from './router_context';
import propTypes from 'prop-types';
import matchPath from './matchPath';
/*
 **
 **
 **
 */
function Route(props) {
  //匹配传进来的pathname
  const matchRoute = (location) => {
    const { exact = false, strict = false, sensitive = false } = props;
    return matchPath(props.path, location.pathname, {
      exact,
      strict,
      sensitive,
    });
  };
  /**
   * 匹配规则渲染子组件 依次向下判断
   * path:路径规则
   * children 无论是否匹配，都会渲染
   * render 匹配成功后渲染函数
   * component 匹配成功后渲染
   */
  const renderChildren = (ctx) => {
    if (typeof props.children !== 'undefined' && props.children !== null) {
      if (typeof props.children === 'function') {
        props.children(ctx);
      } else {
        return props.children;
      }
    }
    if (!ctx.match) {
      return null;
    }
    if (typeof props.render === 'function') {
      props.render(ctx);
    }
    if (props.component) {
      const Component = props.component;
      return <Component {...ctx}></Component>;
    }
    return null;
  };

  const renderFunc = (value) => {
    const ctxValue = {};
    ctxValue.history = value.history;
    ctxValue.location = value.location;
    ctxValue.match = matchRoute(value.location);
    console.log('renderChildren(ctxValue)', renderChildren(ctxValue));
    return (
      <ctx.Provider value={ctxValue}>{renderChildren(ctxValue)}</ctx.Provider>
    );
  };

  return <ctx.Consumer>{renderFunc}</ctx.Consumer>;
}
Route.defaultProps = {
  path: '/',
}; //默认路径

export default Route;
