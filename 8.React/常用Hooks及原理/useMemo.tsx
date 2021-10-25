import React, { useMemo } from 'react';

//用于需要经过大量计算的，用于性能优化
export default function Memo() {
  const test = useMemo(() => {
    const mapArr = new Array(1000).fill(1);
    const mapNode = mapArr.map((value, index) => <div key={index}></div>);
    return mapNode;
  }, []); //根据依赖向来进行计算。如果依赖不变，不会进行重复计算
  return <div>{test}</div>;
}
