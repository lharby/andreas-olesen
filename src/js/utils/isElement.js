/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/**
 * Find out whether or not the given argument is an element that would react somewhat normally to DOM-manipulations.
 *
 * @since 3.7.0
 * @param {*} element - The element to check.
 * @returns {boolean} `true` if the given argument is an element (or document, or window), and `false` otherwise.
 */
export function isElement(element) {
    return (
        element instanceof Element ||
        element instanceof Document ||
        element instanceof Window
    );
}
