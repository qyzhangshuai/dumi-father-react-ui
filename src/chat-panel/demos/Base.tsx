import React, { useState } from 'react';
import { ChatPanel } from 'z-react-ui';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Base: React.FC = () => {
  const [data, setData] = useState([
    {
      id: 1, // 消息id
      avatarSrc: 'https://gitee.com/assets/no_portrait.png', // 头像
      createTime: '2021-04-16 16:58:06', // 创建时间
      msgType: 3 as const, // 图片
      msgContent:
        'https://www.kaisir.cn/uploads/chatImg/64f0149dcb1f411eb854fb38a5bc7321.jpg?width=1203&height=677', // 消息内容
      userId: '111', // 发送消息的用户id
      userName: 'zwen900523', // 用户名
    },
    {
      id: 2,
      avatarSrc: 'https://gitee.com/assets/no_portrait.png',
      createTime: '2021-04-17 12:12:00',
      msgType: 1 as const, // 文本
      msgId: '121710f399b84322bdecc238199d6888',
      msgContent: '/微笑/',
      userId: '222',
      userName: 'zhangshuaiqy',
    },
  ]);

  return <ChatPanel dataSource={data} loginId={'222'} />;
};

export default Base;
