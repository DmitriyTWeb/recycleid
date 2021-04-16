"use strict";

var gulp = require("gulp");
// var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var server = require("browser-sync").create();
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var del = require("del");
var webpack = require("webpack-stream");
const path = require("path");

const webpackConfig = require('./webpack.config.js');
const webpackConfigProd = Object.assign({}, webpackConfig, { mode: 'production' });

gulp.task('webpack', function () {
  return gulp
    .src('src/index.js')
    .pipe(
      webpack(require('./webpack.config.js'))
    )
    .pipe(gulp.dest(path.resolve(__dirname, 'build')));
});
gulp.task('webpackProduction', function () {
  return gulp
    .src('src/index.js')
    .pipe(
      webpack(webpackConfigProd)
    )
    .pipe(gulp.dest(path.resolve(__dirname, 'build')));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("src/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("src/*.html", gulp.series("copy", "refresh"));
  gulp.watch("src/components/**/*.jsx", gulp.series("webpack", "refresh"));
  gulp.watch("src/*.js", gulp.series("webpack", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("css", function () {
  return gulp.src("src/sass/style.scss")
    // .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("copy", function () {
  return gulp.src([
    "src/*.html",
  ], {

  })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("buildProduction", gulp.series("clean", "copy", "css", "webpackProduction"));
gulp.task("build", gulp.series("clean", "copy", "css", "webpack"));
gulp.task("start", gulp.series("build", "webpack", "server"));
