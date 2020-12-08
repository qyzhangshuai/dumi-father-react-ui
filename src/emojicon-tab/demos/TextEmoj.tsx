import React from 'react';
import { EmojiconTab } from 'z-react-ui';

const style = {
  color: '#1890ff',
};

export default () => {
  return (
    <>
      <div> 底部（默认）</div>
      <EmojiconTab
        onEmojiChange={(emoji: string) => alert('点击了:' + emoji)}
        emojiText={<span style={style}>表情</span>}
      />
      <div> 顶部:</div>
      <EmojiconTab
        placement="top"
        onEmojiChange={(emoji: string) => alert('点击了:' + emoji)}
        emojiText={<span style={style}>表情</span>}
      />
    </>
  );
};
