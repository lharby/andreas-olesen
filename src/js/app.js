import './components/globals';
import { router } from './components/router';
import { entry } from './components/entry';
import { indexPage } from './components/indexPage';
import { indexPageContent } from './components/indexPageContent';
import { workNavigation } from './components/workNavigation';
import { cursor } from './utils/cursor';
import { getNavHeight, getFooterHeight } from './utils/getCSSProperties';
import { outputDate } from './components/outputDate';
import { attachKeyEvent } from './utils/attachKeyEvent';
import { attachScrollEvent } from './utils/attachScrollEvent';
import { lightbox } from './components/lightbox';
import './components/cookieManagement';

const dynamicFunctions = () => {
    lightbox();
}

const staticFunctions = () => {
    router();
    entry();
    indexPage();
    indexPageContent();
    workNavigation();
    cursor();
    getNavHeight();
    getFooterHeight();
    outputDate();
    attachKeyEvent();
    attachScrollEvent();
    dynamicFunctions();
}

document.addEventListener('DOMContentLoaded', () => {
    staticFunctions();
});

window.addEventListener('resize', () => {
    getNavHeight();
    getFooterHeight();
});

screen.orientation.addEventListener('change', () => {
    getNavHeight();
    getFooterHeight();
});

export {
    dynamicFunctions
}