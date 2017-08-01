var fs = require('fs'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    $if = require('gulp-if'),
    minimist = require('minimist'),
    argv = minimist(process.argv.slice(2));

//编译less
gulp.task('less', function() {
    gulp.src(argv.f)
        .pipe(less())
        .pipe($if(argv.m, minifycss()))
        .pipe(gulp.dest(argv.f.replace(/\/(.(?!\/))*\.less/, '')));
});

//监听文件
gulp.task('watch', ['less'], function() {
    gulp.watch(argv.f, ['less']);
});

//默认任务
gulp.task('default', function(){
    if(argv.f) {
        gulp.start('watch');
    }
});
