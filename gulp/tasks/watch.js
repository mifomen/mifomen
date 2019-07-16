module.exports = function () {
 $.gulp.task('watch', function() {
  $.gulp.watch("src/scss/**/*.scss",  $.gulp.parallel('scss'));
  $.gulp.watch("src/**/*.pug",  $.gulp.parallel('pug'));
  $.gulp.watch("src/js/**/*.js",  $.gulp.parallel('script'));
  $.gulp.watch("src/**/*.html",  $.gulp.series('html2pug','pug'));
 });
}