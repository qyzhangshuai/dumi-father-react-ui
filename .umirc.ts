import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'dumi-react-ui',
  favicon: 'http://chuantu.xyz/t6/741/1606832294x1700340450.jpg',
  logo: 'http://chuantu.xyz/t6/741/1606832294x1700340450.jpg',
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
      path: 'https://github.com/qyzhangshuai/dumi-react-ui',
    },
  ],
  alias: {
    'dumi-react-ui/lib/components': join(__dirname, 'src', 'components'), // 文件中有些属性，需要从components中导出
    'dumi-react-ui/lib': join(__dirname, 'src', 'components'), // 用来按需加载css文件，demo中不写样式，就是使用了这个别名 babel-plugin-import
    'dumi-react-ui': join(__dirname, 'src', 'components'), // 主要用于 import { OrgTree } from 'dumi-react-ui' 可以不写
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: true },
      'antd',
    ],
    [
      'import',
      { libraryName: 'dumi-react-ui', libraryDirectory: 'lib', style: true },
      'dumi-react-ui',
    ],
  ],
  // more config: https://d.umijs.org/config
});
