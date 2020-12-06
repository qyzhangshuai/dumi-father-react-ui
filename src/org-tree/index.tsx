import React, { useEffect, useMemo } from 'react';
import classnames from 'classnames';
import TreeNode from './TreeNode';
import { useForceUpdate } from '@/_hooks';

//组件
const defaultNode = {
  id: 'id',
  label: 'label',
  expand: 'expand',
  children: 'children',
};

export interface NodeProps {
  id?: string;
  label?: string;
  expand?: string;
  children?: string;
}
export interface DataProps {
  id?: string | number;
  label?: React.ReactNode;
  conditionList?: React.ReactNode;
  children?: DataProps[];
  [props: string]: any;
}

export interface OrgTreeProps {
  data: DataProps;
  labelWidth?: string | number;
  horizontal?: boolean;
  collapsable?: boolean;
  expandAll?: boolean;
  activeId: string | number;
  node?: NodeProps;
  labelClassName?: string;
  conditionClassName?: string;
  onClick?: (e: React.MouseEventHandler<HTMLElement>, data: DataProps) => void;
  onConditionClick?: (
    e: React.MouseEventHandler<HTMLElement>,
    data: DataProps,
  ) => void;
  renderContent?: (data: DataProps) => void;
}

const OrgTree: React.FC<OrgTreeProps> = props => {
  const forceUpdate = useForceUpdate();
  const {
    horizontal,
    expandAll,
    activeId,
    node,
    data,
    onClick,
    onConditionClick,
    renderContent = (data: DataProps) => data.label,
    ...restProps
  } = useMemo(() => props, [props]);

  useEffect(() => {
    if (expandAll) toggleExpand(data, true);
  }, []);

  const handleExpand = (
    _e: React.MouseEventHandler<HTMLElement>,
    nodeData: DataProps,
  ) => {
    if ('expand' in nodeData) {
      nodeData.expand = !nodeData.expand;
      if (!nodeData.expand && nodeData.children) {
        collapse(nodeData.children);
      }
      forceUpdate();
    } else {
      nodeData.expand = true;
      forceUpdate();
    }
  };

  const collapse = (list: DataProps[]) => {
    list.forEach((child: DataProps) => {
      if (child.expand) {
        child.expand = false;
      }
      child.children && collapse(child.children);
    });
  };

  const toggleExpand = (data: DataProps, val: boolean) => {
    if (Array.isArray(data)) {
      data.forEach(item => {
        item.expand = val;
        if (item.children) {
          toggleExpand(item.children, val);
        }
      });
    } else {
      data.expand = val;
      if (data.children) {
        toggleExpand(data.children, val);
      }
    }
    forceUpdate();
  };

  return (
    <div className="org-tree-container">
      <div className={classnames('org-tree', { horizontal: horizontal })}>
        <TreeNode
          data={data}
          activeId={activeId}
          node={{ ...defaultNode, ...node }}
          onExpand={(
            e: React.MouseEventHandler<HTMLElement>,
            nodeData: DataProps,
          ) => handleExpand(e, nodeData)}
          onClick={(
            e: React.MouseEventHandler<HTMLElement>,
            nodeData: DataProps,
          ) => onClick && onClick(e, nodeData)}
          onConditionClick={(
            e: React.MouseEventHandler<HTMLElement>,
            nodeData: DataProps,
          ) => onConditionClick && onConditionClick(e, nodeData)}
          renderContent={renderContent}
          {...restProps}
        />
      </div>
    </div>
  );
};

export default OrgTree;
