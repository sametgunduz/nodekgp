var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
  return gulp.src(['test/test-*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        chai: require('chai'),
        expect: require('chai').expect,
        request: require('request')
      }
    }));
});