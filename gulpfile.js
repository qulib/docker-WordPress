var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var image = require('gulp-image'); //external dependencies, see: https://www.npmjs.com/package/gulp-image
var newer = require('gulp-newer');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Working folders
var themename = 'twentyfifteen-PC';
var themedir = 'app/wp-content/themes/';
var root = themedir + themename + '/';
var img = root + 'img/';
var js = root + 'js/';
var languages = root + 'languages/';
var scss = root + 'sass/';

// CSS via Sass and Autoprefixer
gulp.task('css', function() {
	return gulp.src(scss + '{style.scss,rtl.scss}')
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}).on('error', sass.logError))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
	]))
	.pipe(sourcemaps.write(scss + 'maps'))
	.pipe(gulp.dest(root));
});

// Optimize images through gulp-image
gulp.task('images', function() {
	return gulp.src(img + 'raw/**/*.+(png|jpg|gif|svg)')
	.pipe(newer(img))
	.pipe(image())
	.pipe(gulp.dest(img));
});

// JavaScript
gulp.task('javascript', function() {
	return gulp.src([js + '*.js'])
	.pipe(gulp.dest(js));
});

// Watch everything
gulp.task('watch', function() {
	browserSync.init({
		open: 'external',
		proxy: 'localhost',
	});
	gulp.watch([root + '**/*.css', root + '**/*.scss' ], ['css']);
	gulp.watch(js + '**/*.js', ['javascript']);
	gulp.watch(img + 'raw/**/*.+(png|jpg|gif|svg)', ['images']);
	gulp.watch(root + '**/*').on('change', browserSync.reload);
});

// Default task (runs at initiation: gulp --verbose)
gulp.task('default', ['watch']);
