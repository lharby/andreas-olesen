import './components/globals';
import { router } from './components/router';
import { entry } from './components/entry';
import { indexPage } from './components/indexPage';
import { indexPageContent } from './components/indexPageContent';
import { workNavigation } from './components/workNavigation';
import { getNavHeight } from './utils/getCSSProperties';
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
    indexPageContent();
    workNavigation();
    getNavHeight();
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