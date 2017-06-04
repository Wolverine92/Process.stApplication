/* File: gulpfile.js */

// grab our packages
var gulp = require('gulp'),
    jshint = require('gulp-jshint');
sass = require('gulp-sass');
sourcemaps = require('gulp-sourcemaps');


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// configure the sass task
gulp.task('build-css', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init()) // Process the original sources
        .pipe(sass())
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('common/css/compiled.css'));
});


/* updated watch task to include sass */

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['jshint']);
    gulp.watch('sass/**/*.scss', ['build-css']);
});
