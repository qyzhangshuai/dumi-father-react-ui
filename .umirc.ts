import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'z-react-ui',
  favicon: 'http://m.qpic.cn/psc?/V13sL17e2IskgF/ruAMsa53pVQWN7FLK88i5panvpKM.uKn2D6a3PfJMjCKBgHJtiIq.zj.7d2hdbLGfaAxjUP2yNouZ2AR4uC6bRjy368JEQ4sFaLwqIB2g4k!/b&bo=9AHtAQAAAAABBzk!&rf=viewer_4',
  logo: 'http://m.qpic.cn/psc?/V13sL17e2IskgF/ruAMsa53pVQWN7FLK88i5panvpKM.uKn2D6a3PfJMjCKBgHJtiIq.zj.7d2hdbLGfaAxjUP2yNouZ2AR4uC6bRjy368JEQ4sFaLwqIB2g4k!/b&bo=9AHtAQAAAAABBzk!&rf=viewer_4',
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
