import fonter from 'gulp-fonter';


export const ttfToWoff = () => {
    return app.gulp.src(app.path.src.fonts, {})
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "FONTS",
        mesage: "Error: <%= error.message %>"
    })))
    .pipe(app.gulp.dest(app.path.build.fonter))
}