/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* attachKeyEvent function */
import { toggleVisibility } from './toggleVisibility';

import { htmlElem, entryElem } from '../components/globals';

const attachKeyEvent = () => {
    htmlElem.addEventListener('keydown', (e) => {
        if (e.key === 'x' || e.key === 'X') {
            toggleVisibility(entryElem);
        }
    });
};

export {
    attachKeyEvent
}