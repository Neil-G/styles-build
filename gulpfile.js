var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss    = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('./src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe( postcss([ require('autoprefixer') ]) )
    .pipe( sourcemaps.write('.') )
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function () {
  gulp.watch('./src/*.scss', ['sass']);
});
