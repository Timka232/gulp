import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import autoPrefixer from 'gulp-autoprefixer';
import CleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
const sass = gulpSass(dartSass);

export const style = () => {
    return app.gulp.src(app.path.src.style, {sourcemaps: true}) // карты исходников
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "CSS",
        mesage: "Error: <%= error.message %>"
    })))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(CleanCss())
    .pipe(groupCssMediaQueries())
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserlist: ["last 3 versions"],
        cascade: true
        
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browserSync.stream())
}