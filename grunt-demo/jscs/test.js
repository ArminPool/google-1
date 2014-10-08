var gulp = require('gulp');
var notify = require('gulp-notify');
var growl = require('gulp-notfy-growl');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

gulp.task('jscs', function () {
    gulp.src('js/*.js')
        .pipe(jscs())
        .pipe(notify({
            title: 'jscs',
            message: 'jscs passed. let it fly!'
        }));
});