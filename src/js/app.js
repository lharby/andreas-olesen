import { entry } from './components/entry';
import { indexPage } from './components/indexPage';
import { workNavigation } from './components/workNavigation';
import { outputDate } from './components/outputDate';

document.addEventListener('DOMContentLoaded', () => {
    entry();
    indexPage();
    workNavigation();
    outputDate();
});