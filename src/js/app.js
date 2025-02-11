import './components/globals';
import { router } from './components/router';
import { entry } from './components/entry';
import { indexPage } from './components/indexPage';
import { workNavigation } from './components/workNavigation';
import { outputDate } from './components/outputDate';
import { attachKeyEvent } from './utils/attachKeyEvent';
import { attachScrollEvent } from './utils/attachScrollEvent';
import { lightbox } from './components/lightbox';

const dynamicFunctions = () => {
    lightbox();
}

const staticFunctions = () => {
    router();
    entry();
    indexPage();
    workNavigation();
    outputDate();
    attachKeyEvent();
    attachScrollEvent();
    dynamicFunctions();
}

document.addEventListener('DOMContentLoaded', () => {
    staticFunctions();
});

export {
    dynamicFunctions
}