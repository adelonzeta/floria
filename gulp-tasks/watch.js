var gulp   = require('gulp');
var panini = require('panini');

module.exports = function() {
  gulp.watch('app/styles/**/*.scss', ['sass']);
  gulp.watch('app/{layouts,pages,partials}/**/*.html', ['refresh', 'panini']);
};

gulp.task('refresh', function() {
  return panini.refresh();
});

module.exports.dependencies = ['browser-sync'];
