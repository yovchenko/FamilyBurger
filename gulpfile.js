const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
	gulp.src('images/carousel/img-2-desk.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);
