var gulp   = require('gulp');
var panini = require('panini');
var inky   = require('inky');

module.exports = function() {
  return gulp.src('source/pages/*.html')
    .pipe(panini({
      root: 'source',
      layouts: 'source/layouts',
      partials: 'source/partials',
      helpers: 'source/helpers',
      data: 'source/data'
    }))
    .pipe(inky())
    .pipe(gulp.dest('source'));
};
