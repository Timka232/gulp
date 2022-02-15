

export const server = (done) => {
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.build.html}` // папка запуска файла
        },
        notify: false, //Сообщения в баузере
        port: 3000
    })
}