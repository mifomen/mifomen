module.exports = function () {
  $.gulp.task('serve', function (){
    $.bs.init({
      server: {
        baseDir: 'build'
      },
      notify: false,
      open: true,
      ui: false
    }),
    $.gulp.watch("src/scss/**/*.scss",  $.gulp.parallel('scss'));
    $.gulp.watch("src/**/*.pug",  $.gulp.parallel('pug'));
    $.gulp.watch("src/**/*.html",  $.gulp.parallel('pug'));
    $.gulp.watch("src/js/**/*.js",  $.gulp.parallel('script'));
    // $.gulp.watch("src/pug/html2pug/*.html",  $.gulp.series('html2pug','pug'));
     $.gulp.watch("src/img/**/*.{png,jpg,svg}",  $.gulp.parallel('img'));
    // $.gulp.watch("src/pug/html2pug/*.html",  $.gulp.series('html2pug','pug'));
      // $.gulp.watch("src/pug/*.html",  $.gulp.parallel('html'));
  })
}