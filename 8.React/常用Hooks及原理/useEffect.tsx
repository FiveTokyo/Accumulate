import React, { useEffect } from 'react';

export default function study() {
  useEffect(() => {
    (async () => {
      console.log('hellow');
    })(); //异步执行effect内容函数
    //内容函数
    return () => {
      'cleanup'; //副作用函数，在组建第一次render后，第二次渲染优先执行，或者组件卸载之行
    };
  }, []); //input依赖项,如果不填空【】在第一次render后执行作用类似类组件的componentDidMounted,但是执行时机类似componentDidUpdated;
  //如果填的依赖项变量， 变量改变后，（render第一次后）内容返回的副作用函数执行，在内容函数会执行，
  //如果第二个参数[]不填，每次render都会执行
  return <div></div>;
}
