var gulp  = require('gulp');
var uncss = require('gulp-uncss');

module.exports = function() {
  return gulp.src('source/styles/*.css')
    .pipe(uncss({
      html: [
        'source/*.html'
      ]
    }))
    .pipe(gulp.dest('source/styles'));
};

module.exports.dependencies = ['panini', 'sass'];
