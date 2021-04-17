import React from 'react';
import { usePrefixCls } from '@/_hooks';
import classNames from 'classnames';
import ChatList from './components/ChatList';
import { MsgType } from './utils';

export interface ChatDataSource {
  id: number | string;
  msgType: MsgType;
  [props: string]: any;
}
export interface FieldNames {}
export interface ChatPanelProps {
  dataSource: ChatDataSource[];
  // 自定义 dataSource 中 label name children 的字段
  fieldNames?: FieldNames;
  loginId: number | string;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const defaultFieldNames = {};

const ChatPanel: React.FC<ChatPanelProps> = ({
  dataSource,
  fieldNames = defaultFieldNames,
  loginId,
}) => {
  const prefixCls = usePrefixCls('chat-panel');

  return (
    <div
      className={classNames(prefixCls, `${prefixCls}-transparent-scroll-bar`)}
    >
      {/* 聊天内容区域 */}
      <ChatList dataSource={dataSource} loginId={loginId} />
    </div>
  );
};

export default ChatPanel;
