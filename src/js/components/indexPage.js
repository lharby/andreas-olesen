/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page */
import { htmlElem, indexClass } from './globals';

const indexPage = () => {
    const arrPaths = document.location.pathname.split('/');
    const primaryDir = arrPaths[1];
    let pathnames = arrPaths.filter(item => item !== '');

    if (!primaryDir) {
        htmlElem.classList.add(indexClass);
    } else {
        htmlElem.classList.add(...pathnames);
        htmlElem.classList.remove(indexClass);
    }
};

export {
    indexPage
}