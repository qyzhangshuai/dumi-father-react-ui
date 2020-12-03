import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Popover } from 'antd';
import { TabsProps } from 'rc-tabs/lib/Tabs';
import classNames from 'classnames';
import { emojicons } from './defaultEmojicons';
import TabsEmoji from './TabsEmoji';
import { defaultPrefixCls } from '@/_utils/config';
import { EmojiconsArr } from './defaultEmojicons';

export type EmojiconTabProps = TabsProps & {
  emojiTabs?: number[] | string; // '0,1,2,3' [0,1,2,3] 两种形式
  emojiTextTabs?: string[]; // 自定义标签栏文案,如果为空，则表示不进行修改 ['表情1', ,'表情2']
  emojiColumns?: EmojiconsArr[]; // 自定义表情
  onEmojiChange?: (value: string) => void;
  visible?: boolean;
  onClose?: () => void;
  btn?: React.ReactNode;
  emojiText?: React.ReactNode;
  emojiTextClassName?: string;
  width?: number | string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const defaultEmojiTabs = [0, 1, 2, 3];
const defaultEmojicons = emojicons[0].cnCode;
const defaultArr: string[] = [];
const defaultColumns: EmojiconsArr[] = [];

const EmojiconTab: React.FC<EmojiconTabProps> = ({
  defaultActiveKey = '0',
  activeKey,
  onChange,
  emojiTabs = defaultEmojiTabs,
  emojiTextTabs = defaultArr,
  emojiColumns = defaultColumns,
  onEmojiChange,
  visible: customVisible,
  onClose,
  btn,
  emojiText = defaultEmojicons,
  emojiTextClassName,
  width = 350,
  placement = 'bottom',
  className,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const prefixCls = useMemo(() => `${defaultPrefixCls}-emoji-tab`, []);

  useEffect(() => {
    setVisible(customVisible);
  }, [customVisible]);

  const handleEmojiChange = useCallback(
    emoji => {
      setVisible(false);
      onEmojiChange && onEmojiChange(emoji);
    },
    [onEmojiChange],
  );

  const handleClickBtn = useCallback(() => setVisible(true), []);
  const handleCancel = useCallback(() => {
    setVisible(false);
    onClose && onClose();
  }, [onClose]);

  useEffect(() => {
    if (!visible) {
      setVisible(false);
    }
  }, [visible]);

  return (
    <div className={classNames(prefixCls, { [className]: !!className })}>
      <Popover
        placement={placement}
        // overlayClassName={classNames('',{[overlayClassName]:!!overlayClassName})}
        overlayClassName={classNames(`${prefixCls}-overlay`)}
        content={
          <TabsEmoji
            defaultActiveKey={defaultActiveKey}
            activeKey={activeKey}
            onChange={onChange}
            emojiTabs={emojiTabs}
            emojiTextTabs={emojiTextTabs}
            emojiColumns={emojiColumns}
            onEmojiChange={handleEmojiChange}
            {...props}
          />
        }
        trigger="click"
      >
        {btn || (
          <div
            className={classNames(`${prefixCls}-emojo-text`, {
              [emojiTextClassName]: !!emojiTextClassName,
            })}
            onClick={handleClickBtn}
          >
            {emojiText}
          </div>
        )}
      </Popover>
    </div>
  );
};

export default EmojiconTab;
