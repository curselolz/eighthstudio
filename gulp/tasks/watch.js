var gulp   = require('gulp');
var config = require('../config');
var server = require('./server.js');
gulp.task('watch', ['copy:watch','nunjucks:watch','sprite:svg:watch','list-pages:watch','webpack:watch','sass:watch'],function(){
	gulp.watch("build/*.html",server.reload);
});
