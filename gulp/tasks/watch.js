module.exports = function () {
  $.gulp.task('watch:dev', function () {
    $.gulp.watch($.path.watch.html, $.gulp.series('pug'));
    $.gulp.watch($.path.watch.styles, $.gulp.series('styles:dev'));
    $.gulp.watch($.path.watch.js, $.gulp.series('scripts:dev'));
    $.gulp.watch($.path.watch.img, $.gulp.series('img:dev'));
  });
  $.gulp.task('watch:build', function () {
    $.gulp.watch($.path.watch.html, $.gulp.series('pug'));
    $.gulp.watch($.path.watch.styles, $.gulp.series('styles:build'));
    $.gulp.watch($.path.watch.js, $.gulp.series('scripts:build'));
    $.gulp.watch($.path.watch.img, $.gulp.series('img:build'));
  });
};