var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

/*var gulp = require('gulp');
var fontmin = require('gulp-fontmin');

function cyrillic(start, end) {
    let result = '';
    for (let i = start; i < end; i++) {
        result += String.fromCodePoint(i);
    }
    return result;
}
let text = cyrillic('1028', '1112');
gulp.task('default', function () {
    console.log(text);
});*/