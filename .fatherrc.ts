export default {
  esm: 'babel',
  // cjs: 'babel',
  cjs: { type: 'babel', lazy: true },
  // umd: {
  //   name: 'z-react-ui',
  //   sourcemap: true,
  //   globals: {
  //     react: 'React',
  //     antd: 'antd',
  //   },
  // },
  lessInBabelMode: true,
  extractCSS: true,
  runtimeHelpers: true,
};
