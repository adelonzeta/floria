var gulp = require('gulp');

module.exports = function() {
  gulp.watch('source/styles/**/*.scss', ['sass']);
  gulp.watch('source/{layouts,pages,partials}/**/*.html', ['panini']);
};

module.exports.dependencies = ['sass', 'panini'];
