/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* globals */
const htmlElem = document.querySelector('html');
const body = htmlElem.querySelector('body');
const pageWrapper = htmlElem.querySelector('#pageWrapper');
const hiddenClass = 'hidden';
const fadeInClass = 'fade-in';
const fadeInSlowClass = 'fade-in-slow';
const fadeOutClass = 'fade-out';
const indexClass = 'index';
const loadingClass = 'loading';
const entryElem = htmlElem.querySelector('.entry');

export {
    htmlElem,
    body,
    pageWrapper,
    hiddenClass,
    fadeInClass,
    fadeInSlowClass,
    fadeOutClass,
    indexClass,
    loadingClass,
    entryElem
}