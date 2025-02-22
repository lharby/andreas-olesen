/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

function throttle (callback, limit) {
    var waiting = false;
    return function () {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(function () {
                waiting = false;
            }, limit);
        }
    }
}

export {
    throttle
};