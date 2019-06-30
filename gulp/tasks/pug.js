module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src($.path.src.html)
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.gp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest($.path.build.html))
      .on('end', $.bs.reload);
  });
};