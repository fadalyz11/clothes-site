const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer");
// livereload = require("gulp-livereload");

// ==============================================

//  default
gulp.task("default", function() {
  console.log("Hooray - you created a Gulp task.");
});

// html
gulp.task("html", function() {
  console.log("Imagine something useful being done to your HTML here.");
});

// Sass
gulp.task("styles", function() {
  return (
    gulp
      .src("public/scss/styles.scss")
      .pipe(
        sass({
          // outputStyle: "compressed",
          includePaths: require("node-normalize-scss").includePaths
        })
      )

      .pipe(autoprefixer())
      // .pipe(concat())
      .pipe(gulp.dest("public/dist"))
  );
});

// watching
gulp.task("watch", function() {
  console.log("watching");
  // require("./server.js");
  // livereload.listen({ start: true });
  // gulp.watch(scripts_PATH, gulp.series("scripts"));
  // gulp.watch(css_PATH, gulp.series("styles"));
  //  gulp.watch(scripts_PATH, gulp.series("scripts"));
  gulp.watch("public/index.html", gulp.series("html"));
  gulp.watch("public/scss/**/*scss", gulp.series("styles"));
});
