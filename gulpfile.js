const config = require("./config.js");

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const browsersync = require("browser-sync");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const scss = require("postcss-scss");
const reporter = require("postcss-reporter");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
const stylelint = require("stylelint");
const stylefmt = require("gulp-stylefmt");

gulp.task("default", ["watch"], function() { });

gulp.task("watch", ["browsersync"], function() { });

gulp.task("browsersync", function() {
	browsersync(config.browsersync);

	gulp.watch("*.{sass,scss}", ["sass"]);
	gulp.watch("*.{css,html}", browsersync.reload);
});


gulp.task("sass", function() {
	const processors = [
		precss(config.precss.options),
		autoprefixer(config.autoprefixer.options)
	];

	return gulp.src("main.scss")
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(postcss(processors, {syntax: scss}))
		.pipe(sourcemaps.write("maps"))
		.pipe(gulp.dest(config.sass.dest))
		.pipe(browsersync.stream());
});

gulp.task("stylelint", function() {
	const processors = [
		stylelint(config.stylelint),
		reporter(config.reporter)
	];

	return gulp.src(config.stylelint.src)
		.pipe(plumber())
		.pipe(postcss(processors, {syntax: scss}))
});

gulp.task("stylefmt", function () {
	return gulp.src(config.stylefmt.src)
		.pipe(stylefmt(config.stylelint))
		.pipe(gulp.dest(config.stylefmt.dest));
});
