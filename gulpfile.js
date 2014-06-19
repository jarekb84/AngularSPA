var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');

var paths = {
  styles: 'app/styles/*.scss',
  styleDestination: 'app/styles'
};

gulp.task('sass', function() {
  gulp.src(paths.styles)
    .pipe(sass())
    .pipe(gulp.dest(paths.styleDestination));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles, ['sass']);
});

gulp.task('serve', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('default', ['sass', 'serve', 'watch']);