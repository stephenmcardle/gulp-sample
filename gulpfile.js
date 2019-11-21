const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const fs = require('fs'); // TODO: remove this

const scssRoot = './scss/**/*.scss';

// Default Gulp Task:
// Grab .scss files, initialize sourcemaps, compile sass, append prefixes, 
// concatenate files, minify css, write sourcemaps, output main.min.css
const defaultTask = () => {
    return gulp.src(scssRoot)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
            cascade: false
      }))
      .pipe(concat('main.css'))
      .pipe(gulp.dest('public/css'))
      .pipe(rename('main.min.css'))
      .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/css'));
}

gulp.task('default', defaultTask);

gulp.task('watch', () => {
  gulp.watch(scssRoot, defaultTask)
})
