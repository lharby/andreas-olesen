/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* work navigation */
import { removeLoading } from '../utils/ajaxLoaders';

import { htmlElem } from './globals';

const workNavigation = () => {
    const workElem = htmlElem.querySelector('.navigation-main a[href="/work"]');
    const workNavigationElem = '/work-navigation';
    fetch(workNavigationElem)
        .then(res => res.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const container = doc.querySelector('.navigation-main__subnav');
            workElem.parentElement.appendChild(container);
        })
        .catch(err => console.warn('Something went wrong.', err))
        .finally(() => removeLoading(htmlElem));

    workElem.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target);
    });
}

export {
    workNavigation
}