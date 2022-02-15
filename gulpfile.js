// ПОДКЛЮЧАЕМ ОСНОВ МОДУЛЬ 

import gulp from 'gulp';
// Импорт путей

import {path} from './gulp/config/path.js';

import {plugins} from './gulp/config/plugins.js'

//передаем значение в глобальнню

global.app = {
    path,
    gulp,
    plugins
}

// ипорт задач
import {html} from './gulp/tasks/html.js';
import {server} from './gulp/tasks/server.js';
import {reset} from './gulp/tasks/reset.js';
import {style} from './gulp/tasks/style.js';
import { images } from './gulp/tasks/images.js';
import {js} from './gulp/tasks/js.js'
import {fonts} from './gulp/tasks/fonts.js'

//наблюдатель

function watcher() {
   gulp.watch(path.watch.html, html) 
   gulp.watch(path.watch.style, style)
   gulp.watch(path.watch.images, images)
   gulp.watch(path.watch.js, js)
}

//основные задачы

const mainTasks = gulp.series(fonts, gulp.parallel(html, style, images, js))

//сценарий

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

const build = gulp.series(reset, mainTasks)

//экспорт

export {dev, build}

//вып сцен по умол

gulp.task('default', dev)