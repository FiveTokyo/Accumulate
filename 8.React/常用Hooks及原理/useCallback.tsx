import React, { useCallback } from 'react';

//传一个函数，用于固定函数的引用值，用于子组件为纯类组件时PureComponent，避免没必要的渲染

export default function study() {
  const func = useCallback(() => {
    console.log('内容');
  });
  return <div></div>;
}
