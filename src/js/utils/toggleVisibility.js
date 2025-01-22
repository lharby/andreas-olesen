/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* toggle visibility */
import { hiddenClass } from "../components/globals";

const toggleVisibility = (elem) => {

    if (elem.classList.contains(hiddenClass)) {
        elem.classList.remove(hiddenClass);
    } else {
        elem.classList.add(hiddenClass);
    }
};

export {
    toggleVisibility
}