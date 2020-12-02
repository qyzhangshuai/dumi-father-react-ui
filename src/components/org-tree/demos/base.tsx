import React, { useState } from 'react';
import { OrgTree } from 'dumi-react-ui';
import { DataProps } from 'dumi-react-ui/lib/components/org-tree';

const horizontal = false; // true：横向  false：纵向
const collapsable = false; // true：可折叠 false：不可折叠
const expandAll = true; // true: 全部展开 false：全部折叠

interface DemoProps {
  // 自己添加
}

const Demo: React.FC<DemoProps> = ({}) => {
  const [value, setValue] = useState();

  const data: DataProps = {
    id: 0,
    label: '一级',
    children: [
      {
        id: 1,
        label: <div>二级内容1</div>,
        conditionList: '条件项',
        children: [
          {
            id: 4,
            label: '三级内容1',
            conditionList: '年后111',
          },
          {
            id: 5,
            label: '三级内容2',
          },
        ],
      },
      {
        id: 2,
        label: <div>二级内容1</div>,
        children: [{ id: 44, label: 'demo' }],
      },
    ],
  };

  const handleClick = (_e: any, data: any) => {
    console.log('data', data);
  };

  return (
    <OrgTree
      data={data}
      activeId={value}
      horizontal={horizontal}
      collapsable={collapsable}
      expandAll={expandAll}
      onClick={handleClick}
    />
  );
};

export default Demo;
