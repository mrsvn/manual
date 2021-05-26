const { series, parallel, watch } = require('gulp');
let run = require('gulp-run'),
    gulp = require('gulp'),
    sass = require('gulp-sass');
// vars
let path_css_dir = './styles/',
    path_sass_inner = './styles/scss/';

function rebuild_honkit () {
    return run('npx honkit build').exec()
        .on('end', () => {
            console.log('Completed');
        })
}

function compile_scss() {
        return gulp.src([path_sass_inner + '**/*.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(path_css_dir));
}

function watch_scss() {
    watch(path_sass_inner +'**/*.scss', { queue: false }, series(compile_scss, rebuild_honkit))
}

exports.default = watch_scss;

// exports.serve = series(serve_honkit);
// exports.watch_scss = series(watch_scss);
