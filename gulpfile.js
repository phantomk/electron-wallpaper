var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
gulp.task('default', function() {
  return gulp.src(['src/app.js', 'test/test.js'])
    .pipe(named())
    .pipe(webpack({
      module: {
        loaders: [
          { test: /\.vue$/, loader: 'vue'}
    ]
  }
    }))
    .pipe(gulp.dest('dist/'));
});
