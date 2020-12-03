import React from 'react';
import { EmojiconTab } from 'z-react-ui';
import { EmojiconType } from 'z-react-ui/lib/emojicon-tab/interface';

export default () => {
  return (
    <>
      <div> 底部（默认）</div>
      <EmojiconTab
        onEmojiChange={(emoji: EmojiconType) => alert('点击了:' + emoji)}
      />
      <div> 顶部:</div>
      <EmojiconTab
        placement="top"
        onEmojiChange={(emoji: EmojiconType) => alert('点击了:' + emoji)}
      />
    </>
  );
};
