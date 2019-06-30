module.exports = function () {
  $.gulp.task('copy:fonts', () => {
    return($.gulp.src($.path.src.fonts))
    .pipe($.gulp.dest($.path.build.fonts))
  });
  $.gulp.task('copy:libs', () => {
    return($.gulp.src($.path.src.libs))
    .pipe($.gulp.dest($.path.build.libs))
  });
}