module.exports = function () {
  $.gulp.task('img', function() {
    return $.gulp.src('src/img/*.{jpg,png,gif}')
    .pipe($.gp.imagemin(
      [
      $.gp.imagemin.gifsicle({interlaced: true}),
      $.gp.imagemin.jpegtran({progressive: true}),
      $.gp.imagemin.optipng({optimizationLevel: 7}),
      $.gp.imagemin.svgo({
        plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
        ]
      })
      ]))
    .pipe($.gulp.dest('build/img'))
  })
}