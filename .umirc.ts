import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'z-react-ui',
  favicon:
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607261513322&di=cf3cdcc164c5f324e73fe431a0fbf139&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fart_origin_min_pic%2F19%2F03%2F16%2Fa2aa2dcfedd10471da72a2dd9aca0d4c.jpg',
  logo:
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607261513322&di=cf3cdcc164c5f324e73fe431a0fbf139&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fart_origin_min_pic%2F19%2F03%2F16%2Fa2aa2dcfedd10471da72a2dd9aca0d4c.jpg',
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
