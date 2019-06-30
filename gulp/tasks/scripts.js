module.exports = function () {
  $.gulp.task('scripts:dev', function () {
    return $.gulp.src($.path.src.js)
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.build.js))
      .pipe($.bs.reload({
        stream: true
      }));
  });
  $.gulp.task('scripts:build', function () {
    return $.gulp.src($.path.src.js)
      .pipe($.gp.plumber({ errorHandler: $.gp.notify.onError("Error: <%= error.message %>") }))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.path.build.js))
      .pipe($.bs.reload({
        stream: true
      }));
  });
};