/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-10-06 17:01:22
 * @LastEditTime: 2021-10-06 17:01:23
 * @LastEditors: Tokyo
 * @FilePath: /study_react_router/src/router/Router.js
 */

import React, { useState, useEffect } from 'react';
import ctx from './router_context';
import PropTypes from 'prop-types';
import matchPath from './matchPath';

function Router(props) {
  const { history } = props;
  const [location, setLocation] = useState(history.location);
  console.log('history:', history);
  useEffect(() => {
    history.listen(({ location }) => {
      console.log('location', location);
      setLocation(location);
    });
    return () => {};
  }, []);
  const ctxValue = {
    location: location,
    history: history,

    match: matchPath('/', location.pathname),
  };
  return (
    <ctx.Provider value={ctxValue}>
      <div> {props.children}</div>

      <h1>{history.location.pathname}</h1>
      <button
        onClick={() => {
          ctxValue.history.push('/home');
        }}
      >
        跳转home
      </button>

      <button
        style={{ marginLeft: 20 }}
        onClick={() => {
          ctxValue.history.push('/manageCenter');
        }}
      >
        跳转manageCenter
      </button>
    </ctx.Provider>
  );
}

Router.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Router;
