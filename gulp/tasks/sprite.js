const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const imageminPngquant = require("imagemin-pngquant");
const imageminJpegRecompress = require("imagemin-jpeg-recompress");

imageMin = () => {
  gulp.task("images", function() {
    return gulp
      .src("public/css/images/**/*.{png,jpeg,jpg,svg,gif}")
      .pipe(
        imagemin([
          imagemin.gifsicle(),
          imagemin.jpegtran(),
          imagemin.optipng(),
          imagemin.svgo(),
          imageminPngquant(),
          imageminJpegRecompress()
        ])
      )
      .pipe(gulp.dest("public/dist" + "/images"));
  });
};

module.exports = imageMin();
