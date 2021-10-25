import React, { useState } from 'react';

export default function study() {
  const [number, setNumber] = useState(null); //类似类组件的this.setState作用， 执行该函数返回的第一个参数
  //为你需要作为状态的变量，第二个为更改状态的函数(两个都可以自定义变量)，进行传值就行，useState()参数作为状态的初始值
  return <div onClick={() => setNumber(number + 1)}>{number}</div>;
}
