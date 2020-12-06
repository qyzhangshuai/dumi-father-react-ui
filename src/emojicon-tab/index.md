---
title: 'EmojiconTab'
group:
  title: EmojiconTab
nav:
  title: 组件
  path: /components
---

# EmojiconTab

EmojiconTab 表情采用标签页的方式，以及使用表情符号进行输出

## 基本使用

### 默认使用第一个表情

<code src="./demos/Base.tsx">

### 支持 emojiText 进行替换表情

<code src="./demos/TextEmoj.tsx">

### 支持自定制元素

<code src="./demos/CusEmoj.tsx">

## 常用 API

| 参数               | 说明                                                                                                                                           | 类型                      | 默认值       | 版本 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------ | ---- |
| defaultActiveKey   | 初始化选中面板的 key，如果没有设置 activeKey                                                                                                   | string                    | "0"          |      |
| activeKey          | 当前激活 tab 面板的 key                                                                                                                        | string                    | -            |      |
| emojiTabs          | 选择哪几个 tab                                                                                                                                 | string \| number[]        | [0, 1, 2, 3] |      |
| emojiTextTabs      | 修改对应 tab 的名字<br />如果中间有空项，则不更改名称                                                                                          | string[]                  | []           |      |
| emojiColumns       | 自定义表情                                                                                                                                     | EmojiconsArr[]            | -            |      |
| visible            | 用于手动控制浮层显隐                                                                                                                           | boolean                   | false        |      |
| emojiText          | 修改显示文案                                                                                                                                   | React.ReactNode           | 😀           |      |
| emojiTextClassName | 文案类名                                                                                                                                       | string                    | false        |      |
| placement          | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string                    | top          |      |
| overlayClassName   | 卡片类名                                                                                                                                       | string                    | -            |      |
| onEmojiChange      | 选择表情触发                                                                                                                                   | `(emoji: string) => void` | -            |      |
| onClose            | 关闭表情框触发                                                                                                                                 | () => void                | -            |      |
| children           | react 的 children                                                                                                                              | React.ReactNode           | -            |      |

> 同时支持 antd 的 Tabs 里面的属性，如需配置则前往[Tabs 标签页](https://ant.design/components/tabs-cn)进行查看
