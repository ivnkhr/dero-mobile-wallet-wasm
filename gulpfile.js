var gulp = require("gulp");

var babel = require("gulp-babel");

gulp.task("default", function () {
  var paths = [
    "./src/*.js"
  ];
  return gulp.src(paths).pipe(babel()).pipe(gulp.dest("./www"));
});