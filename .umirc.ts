import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'z-react-ui',
  favicon: 'http://chuantu.xyz/t6/741/1606832294x1700340450.jpg',
  logo: 'http://chuantu.xyz/t6/741/1606832294x1700340450.jpg',
  base: '/dumi-father-react-ui',
  publicPath: '/dumi-father-react-ui/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'src'],
  },
  dynamicImport: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/qyzhangshuai/dumi-father-react-ui',
    },
  ],
  alias: {
    'z-react-ui/lib': join(__dirname, 'src'), // 用来按需加载css文件，demo中不写样式，就是使用了这个别名 babel-plugin-import
    'z-react-ui': join(__dirname, 'src'), // 主要用于 import { OrgTree } from 'z-react-ui' 可以不写
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: true },
      'antd',
    ],
    [
      'import',
      { libraryName: 'z-react-ui', libraryDirectory: 'lib', style: true },
      'z-react-ui',
    ],
  ],
  // more config: https://d.umijs.org/config
});
