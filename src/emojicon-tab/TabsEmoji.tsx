/**
 * @description: 表情库
 * @author: zs
 * @Date: 2020-11-05 19:56:57
 * @LastEditTime 2020-11-26 14:33:33
 * @LastEditors ronffy
 */
import React, { useMemo } from 'react';
import { Tabs } from 'antd';
import { TabsProps } from 'rc-tabs/lib/Tabs';
import { defaultPrefixCls } from '@/_utils/config';
import emojiconsArr, { EmojiconsArr } from './defaultEmojicons';

type TabsEmojiProps = TabsProps & {
  emojiTabs?: number[] | string; // '0,1,2,3' [0,1,2,3] 两种形式
  emojiTextTabs?: string[]; // 如果中间有空项，则不更改名称
  emojiColumns?: EmojiconsArr[]; // 自定义表情
  onEmojiChange?: (value: string) => void;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const { TabPane } = Tabs;
const defaultEmojiTabs = [0, 1, 2, 3];
const defaultArr: string[] = [];
const defaultColumns: EmojiconsArr[] = [];
const TabsEmoji: React.FC<TabsEmojiProps> = ({
  defaultActiveKey = '0',
  activeKey,
  onChange,
  emojiTabs = defaultEmojiTabs,
  emojiTextTabs = defaultArr,
  emojiColumns = defaultColumns,
  onEmojiChange,
  ...props
}) => {
  const prefixCls = useMemo(() => `${defaultPrefixCls}-emoji-tab`, []);

  const filterEmojiconsArr = useMemo(() => {
    if (Array.isArray(emojiColumns) && emojiColumns.length) {
      return emojiColumns;
    }
    let filterResult = emojiconsArr.filter((_item, index) =>
      typeof emojiTabs === 'string'
        ? emojiTabs.split(',').includes(String(index))
        : emojiTabs.includes(index),
    );

    if (Array.isArray(emojiTextTabs) && emojiTextTabs.length) {
      filterResult = filterResult.map((item, index) => {
        if (emojiTextTabs[index]) {
          item.title = emojiTextTabs[index];
        }
        return item;
      });
    }
    return filterResult;
  }, [emojiTabs, emojiColumns, emojiTextTabs]);

  const filterTabsProps = useMemo(() => {
    const propsObj: any = {};
    if (onChange) {
      propsObj.onChange = onChange;
    }
    if (!activeKey) {
      propsObj.defaultActiveKey = defaultActiveKey;
    }
    return propsObj;
  }, [onChange, activeKey]);

  return (
    <Tabs {...filterTabsProps} {...props}>
      {filterEmojiconsArr.map((item, i) => (
        <TabPane tab={item.title} key={i}>
          {item.emoji.map(emoji => (
            <span
              key={emoji.unifiedCode}
              className={`${prefixCls}-emoji`}
              onClick={() => onEmojiChange(emoji.cnCode)}
            >
              {emoji.cnCode}
            </span>
          ))}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabsEmoji;
