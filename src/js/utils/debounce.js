/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

function debounce (func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export {
    debounce
}