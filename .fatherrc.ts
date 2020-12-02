export default {
  esm: 'babel',
  cjs: 'babel',
  // umd:{
  //   name:'dumi-react'
  // },
  lessInBabelMode: true,
  extractCSS: true,
  runtimeHelpers: true,
  autoprefixer: {
    browsers: [
      'ie>8',
      'Safari >= 6',
    ],
  },
};
