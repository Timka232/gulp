import plumber from 'gulp-plumber'; /*обработка ошибок*/
import notify from 'gulp-notify'; //сообщения
import browserSync from 'browser-sync'; // Плагин открытия браузера и перезагрузка


//экспорт обьект

export const plugins = {
    plumber,
    notify,
    browserSync
}