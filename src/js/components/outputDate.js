/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* date function */
import { htmlElem } from './globals';

const outputDate = () => {
    const dateWrapper = htmlElem.querySelector('.date-wrapper');
    let getYear = new Date();
    getYear = getYear.getFullYear();
    dateWrapper.textContent = getYear;
};

export {
    outputDate
}