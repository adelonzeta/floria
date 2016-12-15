var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');

module.exports = function() {
  gulp.src('build/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true,
      removeComments: true
    }))
    .pipe(gulp.dest('build'));
}

module.exports.dependencies = ['inliner'];
