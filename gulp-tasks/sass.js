var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function() {
  return gulp.src('source/styles/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/foundation-emails/scss']
    }))
    .pipe(gulp.dest('source/styles'));
};
