const { series, parallel, watch} = require('gulp');
var inject = require('gulp-inject-string');
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

function add_to_html() {
    console.log('injects')
    return gulp.src('./_book/index.html')
        .pipe(inject.before('</body>', '<script src="./script.js"></script>\n'))
        .pipe(gulp.dest('./_book/'));
}

function compile_scss() {
        return gulp.src([path_sass_inner + '**/*.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(path_css_dir));
}

function watch_scss() {
    watch([path_sass_inner +'**/*.scss', './_layouts/**'], { ignoreInitial: false, queue: false }, series(compile_scss, rebuild_honkit))
}

exports.default = watch_scss;
// exports.default = series(rebuild_honkit, add_to_html);

// exports.serve = series(serve_honkit);
// exports.watch_scss = series(watch_scss);
