var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss    = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var path = require('path');

gulp.task('build-sass', function () {
  return gulp.src('./src/index.less')
  	.pipe(sourcemaps.init())
    .pipe(less({
    	paths: [],
    }).on('error', sass.logError))
    .pipe( postcss([ require('autoprefixer') ]) )
    .pipe( sourcemaps.write('./sourcemaps/') )
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function () {
  gulp.watch('./src/**/*.less', ['build-sass']);
});
