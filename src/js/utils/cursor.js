/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* cursor function */

import { htmlElem } from '../components/globals';

const cursorElem = htmlElem.querySelector('.cursor');

const cursor = () => {
    return addEventListener('mousemove', (e) => {
        cursorElem.style.left = e.clientX - 10 + 'px';
        cursorElem.style.top = e.clientY - 10 + 'px';
    });
}

export {
    cursor
}