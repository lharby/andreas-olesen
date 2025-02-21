/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { htmlElem } from "../components/globals";

/* nav height function */
const getNavHeight = () => {
    const elem = htmlElem.querySelector('header');
    return document.documentElement.style.setProperty(
        '--nav-height',
        elem.clientHeight + 'px'
    );
};

export {
    getNavHeight
}