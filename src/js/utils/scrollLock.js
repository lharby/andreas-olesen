/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { getElementScroll } from './getElementScroll';
import { htmlElem } from '../components/globals';

/*
 * Get the current state of the scroll lock. `true` if the scroll lock is enabled, otherwise `false`.
 *
 * @type {boolean}
 */
const className = 'doc-scroll-lock';
let scrollTop = 0;
export let isScrollLocked = false;

/**
 * Enable the scroll lock.
 */
export function enableScrollLock() {
    if (!isScrollLocked) {
        // Get scroll position
        const scrollPosition = getElementScroll();

        // Reset scroll position
        window.scrollTo(scrollPosition.left, 0);

        htmlElem.classList.add(className);
        htmlElem.style.marginTop = `${-scrollPosition.top}px`;
        htmlElem.style.marginLeft = 0;
        htmlElem.style.position = 'fixed';
        htmlElem.style.overflowY = 'hidden';
        htmlElem.style.width = '100%';

        // Trigger event on target. You can listen for it using document.body.addEventListener("site.scrollLock:enable", callbackHere)
        // triggerCustomEvent(document.body, "site.scrollLock:enable");

        // Remember state
        isScrollLocked = true;
        scrollTop = scrollPosition.top;
    }
}

/**
 * @type {function}
 * @ignore
 * @deprecated
 */
export const enable = enableScrollLock;

/**
 * Disable the scroll lock
 */
export function disableScrollLock() {
    if (isScrollLocked) {
        const scrollPosition = getElementScroll();

        htmlElem.classList.remove(className);
        htmlElem.style.marginTop = '';
        htmlElem.style.marginLeft = '';
        htmlElem.style.position = '';
        htmlElem.style.overflowY = '';
        htmlElem.style.width = '';

        // Set the scroll position to what it was before
        window.scrollTo(scrollPosition.left, scrollTop);

        // Trigger event on target. You can listen for it using document.body.addEventListener("site.scrollLock:disable", callbackHere)
        // (document.body, "site.scrollLock:disable");

        // Remember state
        isScrollLocked = false;
    }
}

/**
 * @type {function}
 * @ignore
 * @deprecated
 */
export const disable = disableScrollLock;
