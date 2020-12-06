import React, { useState } from 'react';
import { OrgTree } from 'z-react-ui';
import { DataProps } from 'z-react-ui/lib/org-tree';

const horizontal = false; // true：横向  false：纵向
const collapsable = false; // true：可折叠 false：不可折叠
const expandAll = true; // true: 全部展开 false：全部折叠

interface BaseProps {
  // 自己添加
  [props: string]: any;
}

const Base: React.FC<BaseProps> = ({}) => {
  const [value, setValue] = useState<string | number>(0);

  const dataSource: DataProps = {
    id: 0,
    label: '一级内容',
    children: [
      {
        id: 1,
        label: <div>二级内容-1</div>,
        conditionList: '二级内容-条件项',
        children: [
          {
            id: 4,
            label: '三级内容-1-1',
            conditionList: '三级内容-条件项',
          },
          {
            id: 5,
            label: '三级内容-1-2',
          },
        ],
      },
      {
        id: 2,
        label: <div>二级内容-2</div>,
        children: [{ id: 44, label: '三级内容-2-1' }],
      },
    ],
  };

  const handleClick = (
    _e: React.MouseEventHandler<HTMLElement>,
    data: DataProps,
  ) => {
    setValue(data.id);
  };

  return (
    <OrgTree
      data={dataSource}
      activeId={value}
      horizontal={horizontal}
      collapsable={collapsable}
      expandAll={expandAll}
      onClick={handleClick}
      onConditionClick={handleClick}
    />
  );
};

export default Base;
