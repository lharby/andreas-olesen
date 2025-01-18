/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

const throttle = (fn, timeDelay = 1000) => {
    let fnTimer;
    return (...args) => {
        if (!fnTimer) {
            fn(...args);
            fnTimer = setTimeout(() => {
                fnTimer = null;
            }, timeDelay);
        }
    };
};

export {
    throttle
};