/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { htmlElem } from "../components/globals";

const getNavHeight = () => {
    const elem = htmlElem.querySelector('header');
    return document.documentElement.style.setProperty(
        '--nav-height',
        elem.clientHeight + 'px'
    );
};

const getFooterHeight = () => {
    const elem = htmlElem.querySelector('footer');
    return document.documentElement.style.setProperty(
        '--footer-height',
        elem.clientHeight + 'px'
    );
}

export {
    getNavHeight,
    getFooterHeight
}