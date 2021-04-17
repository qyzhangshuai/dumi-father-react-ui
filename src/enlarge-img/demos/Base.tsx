import React from 'react';
import { EnlargeImg } from 'z-react-ui';

interface BaseProps {}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Base: React.FC<BaseProps> = ({}) => {
  return (
    <EnlargeImg src="http://zhangshuaiqy.gitee.io/static-img/static/travel/C._M0DCiig0bwDdO0Ui480s.jpg" />
  );
};

export default Base;
