var browserSync = require('browser-sync').create();

module.exports = function() {
  browserSync.init({
    server: 'source',
    open: false,
    files: [
      'source/styles/**/*.scss',
      'source/{layouts,pages,partials}/**/*.html'
    ]
  })
};

module.exports.dependencies = ['sass', 'panini'];
