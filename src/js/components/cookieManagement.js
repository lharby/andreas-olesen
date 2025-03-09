/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* cookies function */
import { setCookie, getCookie } from '../utils/cookies';
import { hiddenClass, htmlElem } from './globals';
const cookieWrapper = htmlElem.querySelector('.cookie-wrapper');
const cookieIsSet = getCookie('cookie-accept');

const hideCookieWrapper = () => cookieWrapper.classList.add(hiddenClass);
const dataCookies = htmlElem.querySelectorAll('.data-cookies');

const acceptCookies = () => {
    dataCookies.forEach(item => item.setAttribute('type', 'text/javascript'));
}

const declineCookies = () => {
    dataCookies.forEach(item => item.setAttribute('type', 'text/plain'));
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('decline-cookies')) {
        event.preventDefault();
        hideCookieWrapper();
        declineCookies();
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('accept-cookies')) {
        event.preventDefault();
        hideCookieWrapper();
        acceptCookies();
        setCookie('cookie-accept', 1, 365);
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('cookie-settings')) {
        event.preventDefault();
        cookieWrapper.classList.toggle(hiddenClass);
    }
})

if (cookieIsSet) {
    hideCookieWrapper();
    acceptCookies();
}
