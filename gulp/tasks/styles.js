module.exports = function () {
  $.gulp.task('styles:dev', function () {
    return $.gulp.src($.path.src.styles)
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        cascade: false
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.build.css))
      .pipe($.bs.reload({
        stream: true
      }));
  });
  $.gulp.task('styles:build', function () {
    return $.gulp.src($.path.src.styles)
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        cascade: false
      }))
      .pipe($.gcmq())
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.path.build.css))
      .pipe($.bs.reload({
        stream: true
      }));
  });
};