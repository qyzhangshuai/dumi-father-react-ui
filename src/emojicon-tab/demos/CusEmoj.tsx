import React from 'react';
import { Button } from 'antd';
import { EmojiconTab } from 'z-react-ui';

export default () => {
  return (
    <>
      <div> 底部（默认）</div>
      <EmojiconTab onEmojiChange={(emoji: string) => alert('点击了:' + emoji)}>
        <Button type="primary">表情</Button>
      </EmojiconTab>
      <div> 顶部:</div>
      <EmojiconTab
        placement="top"
        onEmojiChange={(emoji: string) => alert('点击了:' + emoji)}
      >
        <Button type="primary">表情</Button>
      </EmojiconTab>
    </>
  );
};
