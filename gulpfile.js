//  主要就是为了处理less文件，将其转成css
const gulp = require('gulp');
const gulpLess = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
// const defaultThemesLess = require('./scripts/default-vars');
// const cssnano = require('gulp-cssnano');

const paths = {
  lib: 'lib',
  esm: 'es',
  // styles: 'src/**/*.less',
  styles: ['src/**/*.less', '!src/style/**/*'],
};

/**
 * 生成css文件
 */
function less2css() {
  return (
    gulp
      .src(paths.styles)
      .pipe(gulpLess()) // 处理less文件
      .pipe(autoprefixer()) // 根据browserslistrc增加前缀
      // .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
      .pipe(gulp.dest(paths.lib))
      .pipe(gulp.dest(paths.esm))
  );
}

const build = gulp.parallel(less2css);

exports.build = build;

exports.default = build;
