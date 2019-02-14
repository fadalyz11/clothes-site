const gulp = require("gulp"),
  sass = require("gulp-sass"),
  plumber = require("gulp-plumber"),
  sourcemaps = require("gulp-sourcemaps"),
  autoprefixer = require("gulp-autoprefixer");
// =======================================

// Sass Task
const styles = () => {
  gulp.task("styles", function() {
    return (
      gulp
        .src("public/scss/styles.scss")
        .pipe(
          plumber(function(err) {
            console.log("styles error");
            console.log(err);
            this.emit("end");
          })
        )
        .pipe(sourcemaps.init())
        .pipe(
          sass({
            // outputStyle: "compressed",
            includePaths: require("node-normalize-scss").includePaths
          })
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())

        // .pipe(concat())
        .pipe(gulp.dest("public/dist"))
    );
  });
};

module.exports = styles();
