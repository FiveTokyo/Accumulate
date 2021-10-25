import { pathToRegexp } from 'path-to-regexp';
// const routerPath = pathToRegexp('/new/:id/home');
// console.log(routerPath.exec('/new/aa/home'));

/** 得到匹配Route的结果，不匹配则返回null
 * @param {string} path 路径规则
 * @param {string} url: 网页当前的路径,
 * @param {object} options：精确匹配相关设置 {exact, strict, sensitive}
 */
function matchPath(path, url = window.location.pathname, options) {
  const keys = [];
  console.log('url:', url, path);
  const regExp = pathToRegexp(path, keys, getOptions(options));
  const result = regExp.exec(url);
  if (!result) {
    console.warn(`${url}路径与${path}不匹配`);
    return null;
  }
  let excArr = Array.from(result);
  excArr = excArr.slice(1);
  const params = getParams(excArr, keys);
  return {
    isExact: url === result[0],
    params,
    path,
    url: result[0],
  };
}

/**
 * @param  {Array} groups
 * @param  {string} keys
 */

function getParams(groups, keys) {
  const obj = {};
  for (let i = 0; i < groups.length; i++) {
    const value = groups[i];
    const name = keys[i].name;
    obj[name] = value;
  }
  return obj;
}
/**
 * @param options 处理默认属性参数，比如精确匹配
 */
function getOptions(options) {
  const defaultOptions = {
    exact: false,
    sensitive: false,
    strict: false,
  };
  const opts = { ...defaultOptions, ...options };
  return {
    sensitive: opts.sensitive,
    end: opts.exact,
    strict: opts.strict,
  };
}

export default matchPath;
// console.log('matchPath', matchPath('/home/:id/:age'));
