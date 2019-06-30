module.exports = function () {
  $.gulp.task('img:dev', function () {
    return $.gulp.src($.path.src.img)
      .pipe($.gulp.dest($.path.build.img))
  });
  $.gulp.task('img:build', function () {
    return $.gulp.src($.path.src.img)
      .pipe($.gtu())
      .pipe($.gulp.dest($.path.build.img))
  });
};