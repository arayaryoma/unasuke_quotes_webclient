var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var babel = require('gulp-babel');
var concat = require("gulp-concat");
var rimraf = require('rimraf');

gulp.task("js", function () {
    return gulp.src(["src/**/*.js"])
        .pipe(babel())
        .pipe(concat("app.js"))
        .pipe(gulp.dest("dist/scripts"));
});

gulp.task("plugins", function () {
    return gulp.src(["node_modules/axios/dist/axios.js"])
        .pipe(concat("plugins.js"))
        .pipe(gulp.dest("dist/scripts"));
});

gulp.task("styles", function() {
    return gulp.src(["src/**/*.css"])
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist/styles"));
})

gulp.task("default", function () {

});

gulp.task("clean", function (cb) {
    rimraf('dist', cb);
});

gulp.task("build", ["clean","styles", "js", "plugins"], function () {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist"));
});
