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
yarn add babel-plugin-import vfile-message rimraf klaw-sync inquirer ts-node semver --dev
yarn add @types/classnames @types/react @types/react-dom

// klaw-sync 这个暂时没有用到
// less-vars-to-js 暂时没有用到

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

## 搭建过程遇到问题

1、使用 father-build 搭建，发现 less 编译成 css 时，less 文件没有保留，所以使用 gulp 进行 less 的编译

详见项目中的 gulpfile.ts

```js
yarn add gulp gulp-autoprefixer --dev
gulp-less不需要额外安装，因为搭建项目中自己带有
如果想要压缩css，可以使用gulp-cssnano
```

1、发布 npm

2、部署 github.io

- 部署到 github.io 中,详见[dumi](https://d.umijs.org/zh-CN/guide/faq)的 FAQ

- 部署后的地址：https://qyzhangshuai.github.io/dumi-father-react-ui
