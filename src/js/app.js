import './components/globals';
import { entry } from './components/entry';
import { indexPage } from './components/indexPage';
import { workNavigation } from './components/workNavigation';
import { outputDate } from './components/outputDate';
import { attachKeyEvent } from './utils/attachKeyEvent';
import { attachScrollEvent } from './utils/attachScrollEvent';
import { lightbox } from './components/lightbox';

document.addEventListener('DOMContentLoaded', () => {
    entry();
    indexPage();
    workNavigation();
    outputDate();
    attachKeyEvent();
    attachScrollEvent();
    lightbox();
});