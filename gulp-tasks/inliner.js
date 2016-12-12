var gulp        = require('gulp');
var styleInject = require('gulp-style-inject');
var inlineCss   = require('gulp-inline-css');
var replace     = require('gulp-replace');

var assetsURL = 'https://dl.dropboxusercontent.com/u/26886893/mailbox';

module.exports = function() {
  return gulp.src('source/*.html')
    .pipe(styleInject())
    .pipe(inlineCss({
      applyLinkTags: false,
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    }))
    .pipe(replace(/src="assets/, 'src="' + assetsURL))
    .pipe(gulp.dest('build'));
};

module.exports.dependencies = ['uncss'];
