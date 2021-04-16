import React, { FC, CSSProperties, ReactNode } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragDropContextProps,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';

{
  /* <DragDropContext /> - 包装要启用拖放功能的组件 */
}
{
  /* <Droppable /> - 包装组件开始拖拽后可以放置的区域 */
}
{
  /* <Draggable /> - 包装可供拖拽的节点 */
}

export interface DataSource {
  id?: number | string;
  [props: string]: any;
}

export interface DragListProps {
  /**
   * @description 拖拽区域类名
   * @default
   */
  dropClassName?: string;
  /**
   * @description 拖拽区域样式
   * @default
   */
  dropStyle?: CSSProperties;
  /**
   * @description 拖拽区域样式根据isDraggingOver设置样式
   * @default isDraggingOver拖拽时为true，其他时刻为false
   */
  setDropStyleFn?: (isDraggingOver?: boolean) => CSSProperties;

  /**
   * @description 拖拽对象类名
   * @default
   */
  drapClassName?: string;
  /**
   * @description 拖拽对象样式
   * @default
   */
  drapStyle?: CSSProperties;
  /**
   * @description 拖拽对象样式根据isDragging设置样式
   * @default
   */
  setDrapStyleFn?: (
    isDragging?: boolean,
    draggableStyle?: CSSProperties,
  ) => CSSProperties;

  /**
   * @description 拖拽结束事件
   * @default
   */
  onDragEnd?: (result: DropResult, provided: ResponderProvided) => void;
  /**
   * @description 数据源
   * @default []
   */
  dataSource: DataSource[];
  /**
   * @description 渲染单条数据，且数据源对象中，必须要有唯一id属性
   * @default
   */
  renderItem: (item?: DataSource, index?: number) => ReactNode;
  /**
   * @description 拖拽方向
   * @default 'vertical'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 拖拽区域唯一id
   * @default
   */
  droppableId?: string;
  /**
   * @description 确保每个拖拽对象id共用前缀
   * @default
   */
  draggableId?: string;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

function defaultSetDropStyleFn(isDraggingOver: boolean): CSSProperties {
  return {
    background: isDraggingOver ? '#e6f7ff' : 'transparent',
  };
}

function defaultSetDrapStyleFn(
  isDragging: boolean,
  draggableStyle: CSSProperties,
): CSSProperties {
  return {
    ...draggableStyle,
    background: isDragging ? '#91d5ff' : '#fff',
    opacity: isDragging ? 0.5 : 1,
  };
}

const DragList: FC<DragListProps> = ({
  onDragEnd,
  dropClassName,
  dropStyle = {},
  setDropStyleFn = defaultSetDropStyleFn,
  drapClassName,
  drapStyle = {},
  setDrapStyleFn = defaultSetDrapStyleFn,
  dataSource = [],
  renderItem,
  droppableId = 'droppable',
  // direction = 'horizontal',
  direction = 'vertical',
  draggableId = 'draggable',
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={droppableId} direction={direction}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={dropClassName}
              style={{
                ...setDropStyleFn(snapshot.isDraggingOver),
                ...dropStyle,
              }}
            >
              {Array.isArray(dataSource)
                ? dataSource.map((item, index) => (
                    <Draggable
                      draggableId={`${draggableId}-${item.id}`}
                      key={item?.id || index}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={drapClassName}
                          style={{
                            width: '100%',
                            height: '100%',
                            // some basic styles to make the items look a bit nicer
                            userSelect: 'none',
                            ...setDrapStyleFn(
                              snapshot.isDragging,
                              provided.draggableProps.style,
                            ),
                            ...drapStyle,
                          }}
                        >
                          {typeof renderItem === 'function'
                            ? renderItem(item, index)
                            : null}
                        </div>
                      )}
                    </Draggable>
                  ))
                : null}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default DragList;
