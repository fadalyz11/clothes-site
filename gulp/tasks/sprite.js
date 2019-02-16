const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
// const rename = require("gulp-rename");
const config = {
  // shape: {
  //   dimension: {
  //     // Set maximum dimensions
  //     maxWidth: 32,
  //     maxHeight: 32
  //   },
  //   spacing: {
  //     // Add padding
  //     padding: 10
  //   },
  // dest: "./public/dist/sprite/", // Keep the intermediate files
  // },
  mode: {
    css: {
      render: {
        scss: { template: "./gulp/templates/sprite.scss" }
      }
    }
  }
};

Sprites = () => {
  gulp.task("createSprite", function() {
    return gulp
      .src("public/css/images/icons/**/*.svg")
      .pipe(svgSprite(config))
      .pipe(gulp.dest("./public/dist/sprite/"));
  });
};

gulp.task("copySpriteScss", function() {
  return gulp
    .src("./public/dist/sprite/css/*.scss")
    .pipe(gulp.dest("public/scss/modules"));
});
module.exports = Sprites();
