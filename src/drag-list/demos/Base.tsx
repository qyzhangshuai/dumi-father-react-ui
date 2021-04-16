import React, { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { DragList } from 'z-react-ui';
import produce from 'immer';

interface DataObj {
  id: number;
  text: string;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Base: React.FC = ({}) => {
  const [dataSource, setData] = useState<DataObj[]>([
    { id: 1, text: '我是拖拽1' },
    { id: 2, text: '我是拖拽2' },
    { id: 3, text: '我是拖拽3' },
    { id: 4, text: '我是拖拽4' },
    { id: 5, text: '我是拖拽5' },
    { id: 6, text: '我是拖拽6' },
  ]);

  const handleRenderItem = (item: DataObj) => {
    return <div>{item.text}</div>;
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    const dragIndex = source.index;
    const targetIndex = destination.index;
    const dragTargetData = dataSource[dragIndex];
    const targetData = dataSource[targetIndex];
    const getDragDataSource = produce(dataSource, draft => {
      draft[dragIndex] = targetData;
      draft[targetIndex] = dragTargetData;
    });
    setData(getDragDataSource);
  };
  return (
    <DragList
      dataSource={dataSource}
      renderItem={handleRenderItem}
      onDragEnd={handleDragEnd}
    />
  );
};

export default Base;
