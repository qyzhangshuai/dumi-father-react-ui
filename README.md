# z-react-ui

- 采用[dumi](https://d.umijs.org/zh-CN)+[father](https://github.com/umijs/father)进行组件库的文档搭建以及打包

## 搭建过程

```js
$ npx @umijs/create-dumi-lib --site # 初始化一个站点模式的组件库开发脚手架
# or
$ yarn create @umijs/dumi-lib --site
```

额外需要安装的依赖

```js
yarn add antd classnames @babel/runtime @ant-design/icons
yarn add babel-plugin-import vfile-message rimraf klaw-sync --dev
yarn add @types/classnames @types/react @types/react-dom

```

解释：

> antd: 我们引用 antd 做进一步封装
>
> babel-plugin-import：按需引入 antd，以及我们自己的组件库
>
> @babel/runtime： 根据 father 的要求，建议安装，看.fatherrc.js
>
> 以及安装各种声明

接下来就是修改配置

.umirc.ts 以及.fatherrc.js 中的配置，详见项目

1、发布 npm

2、部署 github.io

- 部署到 github.io 中,详见[dumi](https://d.umijs.org/zh-CN/guide/faq)的 FAQ

- 部署后的地址：https://qyzhangshuai.github.io/dumi-father-react-ui

待处理问题：

- 不支持主题配置
- 打包后没有 less 文件，只有 css
- css 没有前缀
