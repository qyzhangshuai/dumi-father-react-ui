---
title: 'OrgTree'
group:
  title: OrgTree
nav:
  title: 组件
  path: /components
---

# OrgTree 组件

一个基于 react 的简单组织树组件

## 基本使用

<code src="./demos/Base.tsx" />

## 常用 API

| 参数               | 说明                                                                  | 类型                                                                 | 默认值                                                            | 版本 |
| ------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- | ---- |
| data               | 数据源                                                                | json                                                                 | -                                                                 |      |
| labelWidth         | label 项宽度                                                          | string \| number                                                     | -                                                                 |      |
| horizontal         | 是否水平                                                              | boolean                                                              | false                                                             |      |
| collapsable        | 是否可折叠                                                            | boolean                                                              | false                                                             |      |
| expandAll          | 是否全部展开                                                          | boolean                                                              | false                                                             |      |
| activeId           | 选中的 id                                                             | string \| number                                                     | -                                                                 |      |
| node               | data 中的 id label expand children 的字段，可以将数据源的字段进行替换 | object                                                               | `{id: 'id',label: 'label',expand: 'expand',children: 'children'}` |      |
| labelClassName     | label 自定义类名                                                      | string                                                               | -                                                                 |      |
| conditionClassName | conditionList 自定义类名                                              | string                                                               | -                                                                 |      |
| onClick            | 点击 label 函数                                                       | `(e: React.MouseEventHandler<HTMLElement>, data: DataProps) => void` | -                                                                 |      |
| onConditionClick   | 点击 conditionList 时触发函数                                         | `(e: React.MouseEventHandler<HTMLElement>, data: DataProps) => void` | -                                                                 |      |
| renderContent      | 处理 label 的数据，渲染 label 函数                                    | `(data:DataProps) => void`                                           | -                                                                 |      |

## FAQ

- v1.0.7 修改组织树样式
