
# z-react-ui

`z-react-ui`，是一款基于 Dumi，由 React + TypeScript 开发的组件库 🎉。

## ✨ 特性

- 🌈 提炼组件库设计良好的视觉风格
- 📦 渐进式探索高质量的前端代码的实现
- 🛡 使用 TypeScript 开发，提升开发体验
- ✅ 组件内部使用 antd 风格，以及 antd 内部颜色
- 📖 提供开发过程的文档思路，助力你学习组件开发
- 🔖 该项目会长期维护，并不断探索最佳实践

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```js
npm install z-react-ui --save
```

```js
yarn add z-react-ui
```

### 按需加载

`z-react-ui`默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { OrgTree } from 'z-react-ui'` 就会有按需加载的效果。

### 示例

```js
import { OrgTree } from 'z-react-ui';
```

手动引入样式

```js
import 'z-react-ui/lib/org-tree/style';
```

使用[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)帮助我们引入样式

```js
[
  'import',
  { libraryName: 'z-react-ui', libraryDirectory: 'lib', style: true },
  'z-react-ui',
];
```

### TypeScript[#](https://ant.design/docs/react/introduce-cn#TypeScript)

`z-react-ui`使用 TypeScript 进行书写并提供了完整的定义文件。

## 作者 (qyzhangshuai)

- [Github](https://github.com/qyzhangshuai/dumi-father-react-ui)
