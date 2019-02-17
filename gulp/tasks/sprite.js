const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");

const config = {
  mode: {
    css: {
      render: {
        scss: { template: "./gulp/templates/sprite.css" }
      }
    }
  }
};

Sprites = () => {
  gulp.task("createSprite", function() {
    return gulp
      .src("./public/css/images/icons/**/*.svg")
      .pipe(svgSprite(config))
      .pipe(gulp.dest("./public/css/sprite/"));
  });
};

SpritesCopy = () => {
  Sprites();
  gulp.task("copySpriteScss", gulp.series("createSprite"), function() {
    return gulp
      .src("./public/css/sprite/css/*.scss")
      .pipe(rename("_sprite.scss"))
      .pipe(gulp.dest("./public/scss/modules"));
  });
};

Combination = () => {
  SpritesCopy();
  Sprites();

  gulp.task("icon", gulp.series("createSprite", "copySpriteScss"), cb =>
    console.log("whats wrong")
  );
};
module.exports = Sprites();
module.exports = SpritesCopy();
module.exports = Combination();
