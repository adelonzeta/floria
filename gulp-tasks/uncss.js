var gulp  = require('gulp');
var uncss = require('gulp-uncss');

module.exports = function() {
  return gulp.src('.build/styles/*.css')
    .pipe(uncss({
      html: [
        '.build/*.html'
      ]
    }))
    .pipe(gulp.dest('.build/styles'));
};

module.exports.dependencies = ['panini', 'sass'];
