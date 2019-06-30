'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    gtu: require('gulp-tinypng-unlimited'),
    gcmq: require('gulp-group-css-media-queries'),
    del: require('del'),

    path: {
        tasks: require('./gulp/config/tasks.js'),
        build: {
            html: 'build/',
            js: 'build/assets/js/',
            css: 'build/assets/css/',
            img: 'build/assets/img/',
            fonts: 'build/assets/fonts/',
            libs: 'build/assets/libs/'
        },
        src: {
            html: 'src/pug/pages/*.pug',
            js: 'src/assets/js/*.js',
            styles: 'src/assets/sass/main.sass',
            img: 'src/assets/img/**/*.*',
            fonts: 'src/assets/fonts/**/*.*',
            libs: 'src/assets/libs/**/*.*'
        },
        watch: {
            html: 'src/pug/**/*.pug',
            js: 'src/assets/js/**/*.js',
            styles: 'src/assets/sass/**/*.{sass,scss}',
            img: 'src/assets/img/**/*.*',
            fonts: 'src/assets/fonts/**/*.*',
            libs: 'src/assets/libs/**/*.*'
        },
        clean: './build',
        serve: './build'
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'del',
    $.gulp.parallel('pug', 'styles:dev', 'scripts:dev','img:dev','copy:fonts','copy:libs'),
    $.gulp.parallel('watch:dev', 'serve')
));

$.gulp.task('build', $.gulp.series(
    'del',
    $.gulp.parallel('pug', 'styles:build', 'scripts:build','img:build','copy:fonts','copy:libs'),
    $.gulp.parallel('watch:build', 'serve')
));