var gulp = require('gulp');
var image = require('gulp-image');

gulp.task('image', function() {
	gulp.src('img/photos/*')
		.pipe(image())
		.pipe(gulp.dest('img/photos'))
	gulp.src('img/logo.png')
		.pipe(image())
		.pipe(gulp.dest('img'))
});

gulp.task('default', ['image']);