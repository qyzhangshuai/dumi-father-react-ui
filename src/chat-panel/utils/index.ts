// 是否是登录者
export function isLoginerFn(
  loginId: string | number,
  compareId: string | number,
) {
  return loginId === compareId;
}
// 得到布局方向
export function getLayout(isLoginer: boolean, contentType: string) {
  if (contentType === 'system') return 'center';
  if (isLoginer) return 'right';
  return 'left';
}

export type MsgType =
  | 0 // 系统消息
  | 1 // 文本
  | 3 // 图片
  | 34 // 语音
  | 47 // 表情消息
  | 49 // 入群邀请
  | 10000 // 微信的系统消息
  | -10; // 时间（非长链接推送）

export type ContentType =
  | 'img'
  | 'system'
  | 'text'
  | 'audio'
  | 'groupInvite'
  | 'publicCard'
  | 'incogni';

// 根据msgType类型，添加语义化
export function msgTypeToContentType(msgType: MsgType): ContentType {
  switch (msgType - 0) {
    case 3:
    case 47:
      return 'img';
    case 0:
    case 10000:
    case -10:
      return 'system';
    case 1:
      return 'text';
    case 34:
      return 'audio';
    case 49:
      return 'groupInvite';
    case 421:
      return 'publicCard';
    default:
      return 'incogni';
  }
}
