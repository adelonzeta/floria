var gulp    = require('gulp');
var ghPages = require('gulp-gh-pages');

module.exports = function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
};

module.exports.dependencies = ['build'];
