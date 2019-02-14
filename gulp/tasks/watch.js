const gulp = require("gulp");
// watching
const watch = () => {
  gulp.task("watch", function() {
    console.log("watching");
    gulp.watch("public/index.html", gulp.series("html"));
    gulp.watch("public/scss/**/*scss", gulp.series("styles"));
  });
};

module.exports = watch();
