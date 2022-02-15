
import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './app/build'; //путь в конечный резултат
const srcFolder = './app/src'

export const path = {
    // обьект путей с результатом
    build: {
        html: `${buildFolder}/`,
        style: `${buildFolder}/style/`,
        images: `${buildFolder}/images/`,
        js: `${buildFolder}/script/`,
        fonts: `${buildFolder}/fonts/`,
    },
    // обьект путей с исходным файлом
    src: {
        html: `${srcFolder}/*.pug`,
        style: `${srcFolder}/style/style.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpng,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        js: `${srcFolder}/script/app.js`,
        fonts: `${srcFolder}/fonts/*.ttf`,
    },
    //обьект путей к файлам и папкам за которым надо следить
    watch: {
        html: `${srcFolder}/**/*.pug`,
        style: `${srcFolder}/style/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpng,gif,webp}`,
        js: `${srcFolder}/script/**/*.js`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder
}