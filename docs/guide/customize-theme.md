---
order: 3
title: '定制主题'
nav:
  title: 开发指南
---

## 定制主题

`z-react-ui` 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

## 定制方式

原理上是使用 less 提供的 modifyVars 的方式进行覆盖变量。下面将针对不同的场景提供一些常用的定制方式。

### 在 webpack 中定制主题

我们以 webpack@4 为例进行说明，以下是一个 webpack.config.js 的典型例子，对 less-loader 的 options 属性进行相应配置。

```js
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
+         modifyVars: {
+           'primary-color': '#1DA57A',
+           'link-color': '#1DA57A',
+           'border-radius-base': '2px',
+         },
+         javascriptEnabled: true,
+       },
+     },
    }],
    // ...other rules
  }],
  // ...other config
}
```

注意：

1. less-loader 的处理范围不要过滤掉 `node_modules` 下的 antd 包。
2. `lessOptions` 的配置写法在 [less-loader@6.0.0](https://github.com/webpack-contrib/less-loader/releases/tag/v6.0.0) 里支持。

### 在 Umi 里配置主题[#](https://ant.design/docs/react/customize-theme-cn#在-Umi-里配置主题)

如果你在使用 [Umi](http://umijs.org/zh/)，那么可以很方便地在项目根目录的 [config/config.js](https://github.com/ant-design/ant-design-pro/blob/56e648ec14bdb9f6724169fd64830447e224ccb1/config/config.js#L45)（Umi）文件中 [theme](https://umijs.org/zh/config/#theme) 字段进行主题配置。`theme` 可以配置为一个对象或文件路径。

```js
"theme": {
  "primary-color": "#1DA57A",
},
```

或者 [一个 js 文件](https://github.com/ant-design/ant-design-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18)：

```js
"theme": "./theme.js",
```

### 在 create-react-app 中定制主题[#](https://ant.design/docs/react/customize-theme-cn#在-create-react-app-中定制主题)

参考 [在 create-react-app 中使用](https://ant.design/docs/react/use-with-create-react-app-cn) 进行配置即可。

## FQA

- 配置主题可以参考 antd 的[定制主题](https://ant.design/docs/react/customize-theme-cn)
