module.exports = function () {
  $.gulp.task('del', () => {
    return $.del([$.path.clean]);
  })
}