var gulp = require('gulp');
var jshint = require('gulp-jshint');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['test/**/*.js']

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint({
        node: true,
        globals: {  //tell jshint that these are not errors
          describe: true,
          it: true,
          before: true,
          after: true
        }
      }))
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});


// just type gulp jshint to run this
gulp.task('jshint', ['jshint:test', 'jshint:app']);

// just type gulp to run this
gulp.task('default', ['jshint']);
