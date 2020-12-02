import React from 'react';
import { Alert } from 'dumi-react-ui';
import { Button } from 'antd';

export default () => {
  return (
    <>
      <Button type="primary">按钮</Button>
      <Alert kind="warning">这是一条警告提示</Alert>;
    </>
  );
};
