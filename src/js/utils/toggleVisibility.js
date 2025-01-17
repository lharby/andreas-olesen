/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* toggle visibility */
import { hiddenClass } from "../components/globals";

const toggleVisibility = (elem) => {
    elem.classList.toggle(hiddenClass);
};

export {
    toggleVisibility
}