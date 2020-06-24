// const gulp = require('gulp'),
//       sass = require('gulp-sass');

// gulp.task('sass',async () => {
//     gulp.src('scss/app.scss')
//         .pipe(sass({
//             includePaths: ['scss']
//         }))
//         .pipe(gulp.dest('css'));
// });


// // gulp.task('watch', gulp.series(['sass']),async() => {
// //     gulp.watch(["scss/*.scss"], gulp.series(['sass']));

// //     // gulp.watch(["scss/*.scss"], ['sass']);
// // });

// gulp.task('watch', () => {
//     gulp.watch('scss/*.scss', (done) => {
//         gulp.series(['sass'])(done);
//     });
// });
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});