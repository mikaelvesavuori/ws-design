const gulp = require("gulp");
const browsersync = require("browser-sync");
const sass = require("gulp-sass");

gulp.task("sass", function() {
	return gulp.src("main.scss")
		.pipe(sass())
		.pipe(gulp.dest(""));
});


/*
const config = require("../config.js");

const gulp = require("gulp");
const browsersync = require("browser-sync");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const scss = require("postcss-scss");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
const flexibility = require("postcss-flexibility");
const ofi = require("postcss-object-fit-images");
//const doiuse = require("doiuse");
//const perfectionist = require("perfectionist");
const gulpFilter = require("gulp-filter");
const rename = require("gulp-rename");

gulp.task("sass", function () {
	const processors = [
		precss(config.precss.options),
		autoprefixer(config.autoprefixer.options),
		flexibility(),
		ofi()
		//doiuse(config.doiuse.options),
		//perfectionist(config.perfectionist.options)
	];

	const filter = gulpFilter(["*.css", "!*.map"], { restore: true });
	browsersync.notify("Compiling Sass");

	return gulp.src(config.sass.src)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on("error", sass.logError))//, browsersync.notify("Error in Sass")))
		.pipe(postcss(processors, {syntax: scss}))
		//.pipe(filter)
		.pipe(sourcemaps.write("maps")) //, { includeContent: false, sourceRoot: "Static/sass/"}))
		//.pipe(filter.restore)
		//.pipe(rename({dirname: ""}))
		.pipe(gulp.dest(config.sass.dest))
		.pipe(browsersync.stream());
});
*/
