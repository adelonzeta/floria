var gulp   = require('gulp');
var panini = require('panini');
var inky   = require('inky');

module.exports = function() {
  return gulp.src('app/pages/*.html')
    .pipe(panini({
      root: 'app',
      layouts: 'app/layouts',
      partials: 'app/partials',
      helpers: 'app/helpers',
      data: 'app/data'
    }))
    .pipe(inky())
    .pipe(gulp.dest('.build'));
};
