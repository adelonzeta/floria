var gulp   = require('gulp');
var panini = require('panini');

module.exports = function() {
  gulp.watch('source/styles/**/*.scss', ['sass']);
  gulp.watch('source/{layouts,pages,partials}/**/*.html', ['refresh', 'panini']);
};

gulp.task('refresh', function() {
  return panini.refresh();
});

module.exports.dependencies = ['sass', 'panini'];
