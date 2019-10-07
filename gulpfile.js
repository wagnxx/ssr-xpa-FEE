const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const entry = './src/server/**/*.js';

function builddev() {
  return watch(entry, { ignoreInitial: false }, function() {
    gulp
      .src(entry)
      .pipe(
        babel({
          babelrc: false,
          plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
        })
      )
      .pipe(gulp.dest('dist'));
  });
}

let build = gulp.series(builddev);

gulp.task('default', build);
