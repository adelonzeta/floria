var browserSync = require('browser-sync').create();

module.exports = function() {
  browserSync.init({
    server: {
      baseDir: ['.build', 'app']
    },
    open: false
  })
};

module.exports.dependencies = ['panini', 'sass'];
