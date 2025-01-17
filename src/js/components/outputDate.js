/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* date function */
const outputDate = () => {
    const dateWrapper = $('.date-wrapper');
    let getYear = new Date();
    getYear = getYear.getFullYear();
    dateWrapper.text(getYear);
};

export {
    outputDate
}