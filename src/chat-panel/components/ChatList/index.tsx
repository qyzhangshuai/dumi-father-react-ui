import React from 'react';
import { usePrefixCls } from '@/_hooks';
import classNames from 'classnames';
import { getTimeText, diffHalfHour } from '../../utils/getTimeText';
import {
  isLoginerFn,
  getLayout,
  MsgType,
  msgTypeToContentType,
} from '../../utils';
import ChatItem from './ChatItem';

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
  const prefixCls = usePrefixCls('chat-list');

  return (
    <div className={classNames(prefixCls)}>
      {Array.isArray(dataSource)
        ? dataSource.map((item, index) => {
            const preData = index !== 0 ? dataSource[index - 1] : ({} as any);
            const isLoginer = isLoginerFn(loginId, item.userId);
            const contentType = msgTypeToContentType(item.msgType);
            return (
              <div
                key={item.id}
                className={classNames(`${prefixCls}-row-list`)}
              >
                {/* 消息发送时间:当前发送消息为第一条显示时间 */}
                {index === 0 ? (
                  <div className={`${prefixCls}-sender-time-list`}>
                    <span>{getTimeText(item.createTime).parser1()}</span>
                  </div>
                ) : // 当前消息与上一条消息发送时间间隔30(暂定)分钟就显示
                !diffHalfHour(preData.createTime, item.createTime) ? (
                  <div className={`${prefixCls}-sender-time-list`}>
                    <span>{getTimeText(item.createTime).parser1()}</span>
                  </div>
                ) : null}

                {/* 消息内容 */}
                <ChatItem
                  layout={getLayout(isLoginer, contentType)}
                  contentType={contentType}
                  chatItem={item}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ChatPanel;
