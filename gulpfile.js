var gulp = require("gulp");
var jade = require("gulp-jade");

var paths = {
  template: ['src/**/*.jade']
};

gulp.task('build', function() {
  gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('dist', function() {
  gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
    gulp.watch(paths.template, ['build']);
});

gulp.task('default', ['watch', 'build', 'dist']);