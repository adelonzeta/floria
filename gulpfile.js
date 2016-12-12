var gulp      = require('gulp');
var loadTasks = require('gulp-task-loader');

loadTasks();

gulp.task('default',  ['panini','sass']);
gulp.task('serve',    ['default','watch','browser-sync']);
gulp.task('build',    ['minify-html', 'minify-images']);
gulp.task('deploy',   ['gh-pages']);
