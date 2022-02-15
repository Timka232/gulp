//pipe - вып действие
//dest - вывод результата файла в папку назначения

import pug from 'gulp-pug'
import versionNumber from 'gulp-version-number'; //обновление сайта постоянно

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "HTML",
        mesage: "Error: <%= error.message %>"
    })))
    .pipe(pug())
    .pipe(versionNumber({
        'value': '%DT%', //сюда дату
        'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js']
        },
        'output': {
            'file': 'gulp/version.json'
        }
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream())
}