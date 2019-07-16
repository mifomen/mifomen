module.exports = function () {
  $.gulp.task('build', 
    $.gulp.series(
      'clear',
      // 'copy-css',
      // 'copy-css-54',
      // 'html2pug',
      'pug',
      // 'html',
      'img',
      // 'svg',
      'scss',
      // 'scripts:lib',
      'script'
      // $.gulp.parallel('html','img', 'scss'),
      // $.gulp.parallel('scripts:lib','script')
    // 'serve',
    // 'watch'
    ));
  $.gulp.task('default', 
    $.gulp.series(
      'build',
      'serve'
      ));
  
}