/**
 * Gulp build files and linting files
 *
 * Seth Cohen <seth.h.cohen@gmail.com>
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var lint = require('gulp-eslint');

gulp.task('styles', function() {
  // Compile Sass for components css
  gulp.src(['sass/**/*.scss', '!sass/site/**/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/'));

  // Compile Sass for sitewide css
  gulp.src(['sass/site/**/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('css/'));
});

gulp.task('lint', function() {
  // Lint the JS
  gulp.src(['**/*.js', '!node_modules/**', '!app/vendor/**'])
  .pipe(lint({
    'rules':{
      'quotes': [1, 'single'],
      'semi': [1, 'always']
    }
  }))
  .pipe(lint.format())
  // Brick on failure to be super strict
  .pipe(lint.failOnError());
});

//Watch task
gulp.task('default',function() {
  gulp.watch('sass/**/*.scss',['styles']);
});