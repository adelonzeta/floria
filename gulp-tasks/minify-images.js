var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = function() {
  gulp.src('source/assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets'));
};
