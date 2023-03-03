const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const webpack = require('webpack-stream');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const { exec } = require('child_process');

const webpackConfig = require('./webpack.config.js');

// Removes previous dist
gulp.task('start', () => {
  return gulp.src('./dist', { allowEmpty: true })
    .pipe(clean());
});

// Creates js bundle from several js files
gulp.task('build', () => {
  return webpack(webpackConfig)
    .pipe(gulp.dest('./dist'))
});

// Converts scss to css
gulp.task('scss', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

// Transfers index
gulp.task('index', () => {
  return gulp.src(['./src/index.html', './src/admin.html', './src/favicon.ico', './src/laptop1.png', './src/laptop2.png', './src/laptop3.png', './src/laptop4.png', './src/laptop5.png', './src/laptop6.png', './src/laptop7.png', './src/laptop8.png', './src/laptop9.png', './src/laptop10.png', './src/laptop11.png', './src/laptop12.png', './src/laptop13.png', './src/laptop14.png', './src/laptop15.png', './src/laptop16.png', './src/laptop17.png', './src/laptop18.png', './src/laptop19.png', './src/laptop20.png', './src/apple.png', './src/dell.png', './src/lenovo.png'])
    .pipe(gulp.dest('./dist'));
});

// Browser Sync
gulp.task('browser-sync', () => {
  browserSync.init({
    browser: 'default',
    port: 4000,
    server: { baseDir: './dist' }
  });
});

// Browser Sync live reload
gulp.task('browser-sync-watch', () => {
  gulp.watch('./dist/styles.css').on('change', browserSync.reload);
  gulp.watch('./dist/shop.js').on('change', browserSync.reload);
  gulp.watch('./dist/index.html').on('change', browserSync.reload);
});

// Watch scss files
gulp.task('watch-scss', () => {
  return gulp.watch('./src/**/*.scss', gulp.series('scss'));
});

// Watch html files
gulp.task('watch-html', () => {
  return gulp.watch('./src/index.html', gulp.series('index'));
});

// Watch tsc files
gulp.task('watch-tsc', () => {
  return gulp.watch('./dist/tsc/**/*.js', gulp.series('build'));
});

// Initial ts compile
gulp.task('tsc', cb => {
  exec('tsc', (err, msg) => {
    cb();
  });
});

// Watch ts files and recompile
gulp.task('tsc-w', () => {
  exec('tsc -w');
});

// Run all together
gulp.task('default', gulp.series(
  'start',
  'scss',
  'index',
  'tsc',
  'build',
  gulp.parallel(
    'browser-sync',
    'browser-sync-watch',
    'watch-scss',
    'watch-html',
    'watch-tsc',
    'tsc-w',
  ),
));
