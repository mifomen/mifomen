module.exports = function () {
  $.gulp.task('scss',function () {
    return $.gulp.src('src/**/main.scss')
    .pipe($.gp.sourcemaps.init())
    .pipe($.gp.plumber())
    .pipe($.gp.sass()).on('error', $.gp.sass.logError)
    // .pipe($.gp.sourcemaps.write({includeContente: false, sourceRoot: '.'}))// delete ?
    // .pipe($.gp.sourcemaps.init({loadMaps: true})) // delete ?
    .pipe($.gp.postcss([
      $.mqpacker({ sort: true })
      ])
    )
    // .pipe($.gp.uncss({
    //   html: ['./build/index.html']
    // }))  
    // .pipe($.gp.autoprefixer({
    //   browsers: ['last 20 versions', "IE 11", "IE 10"],
    //   cascade: true
    // }))
    // .on("error", $.gp.notify.onError({
    //   title: "Error in scss"
    // }))
    .pipe($.gp.stripCssComments()) 
    .pipe($.gp.csso()) 
    .pipe($.gp.rename('style.min.css'))
    // .pipe($.gp.sourcemaps.write('.')) // delete ',' ? ok ?
    .pipe($.gulp.dest('build/css'))
    .pipe($.bs.reload({
      stream: true
    }))
  })
}