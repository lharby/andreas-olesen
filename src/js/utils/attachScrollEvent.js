/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { htmlElem } from '../components/globals';
import { scrollDirection } from '../utils/scrollDirection';
import { throttle } from '../utils/throttle';

const attachScrollEvent = () => {
    const elem = htmlElem.querySelector('body');
    const scrollClass = 'scroll--active';
    const scrollUpClass = 'scroll--up';
    const scrollDownClass = 'scroll--down';
    const interval = 3000;
    const scrollYOffset = 200;
    document.addEventListener('scroll', () => {
        if (window.scrollY > scrollYOffset) {
            throttle(elem.classList.add(scrollClass), interval);
        } else {
            throttle(elem.classList.remove(scrollClass), interval);
        }
    });
    scrollDirection((scrollPos, previousScrollPos) => {
        if (previousScrollPos > scrollPos) {
            elem.classList.remove(scrollDownClass);
            throttle(elem.classList.add(scrollUpClass), interval);
        } else {
            elem.classList.remove(scrollUpClass);
            throttle(elem.classList.add(scrollDownClass), interval);
        }
    });
}

export { attachScrollEvent };