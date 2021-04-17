import React, { useCallback, useMemo } from 'react';
import { usePrefixCls } from '@/_hooks';
import classNames from 'classnames';
import { EnlargeImg } from 'z-react-ui';
import { ContentType } from '../../utils';

interface ChatItemProps {
  layout: 'left' | 'right' | 'center';
  chatItem: any;
  contentType: ContentType;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ChatItem: React.SFC<ChatItemProps> = ({
  layout,
  chatItem,
  contentType,
}) => {
  const prefixCls = usePrefixCls('chat-item');
  const { isLeftLayout, isRightLayout, isCenterLayout } = useMemo(() => {
    return {
      isLeftLayout: layout === 'left',
      isRightLayout: layout === 'right',
      isCenterLayout: layout === 'center',
    };
  }, [layout]);

  const getContent = useCallback(
    (msgContent: string) => {
      console.log('msgContentObj', contentType);
      let content = null;
      switch (contentType) {
        case 'img':
          content = <EnlargeImg src={msgContent} />;
          break;
        case 'text':
          content = msgContent;
          break;
      }
      return content;
    },
    [contentType],
  );

  return (
    <div
      className={classNames(prefixCls, {
        [`${prefixCls}-left`]: layout === 'left',
        [`${prefixCls}-right`]: layout === 'right',
        [`${prefixCls}-center`]: layout === 'center',
      })}
    >
      {/* 左侧头像 */}
      {isLeftLayout ? (
        <div className={`${prefixCls}-avatar`}>
          <img src={chatItem.avatarSrc} alt="头像" />
        </div>
      ) : null}
      {/* 中间内容 */}
      <div className={`${prefixCls}-contentbox`}>
        {/* 用户名 */}
        {chatItem.userName ? (
          <div className={`${prefixCls}-userName`}>{chatItem.userName}</div>
        ) : null}
        <div className={`${prefixCls}-content`}>
          {/* {
            __dangerContent
              ? <div dangerouslySetInnerHTML={{ __html: __dangerContent }} />
              : getContent()
          } */}
          {getContent(chatItem.msgContent)}
        </div>
      </div>
      {/* 右侧头像 */}
      {isRightLayout ? (
        <div className={`${prefixCls}-avatar`}>
          <img src={chatItem.avatarSrc} alt="头像" />
        </div>
      ) : null}
    </div>
  );
};

export default ChatItem;
