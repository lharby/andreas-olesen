/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* index page  content */
import { htmlElem, fadeInClass } from './globals';

const indexPageContent = () => {
    // lets get a post and inject the content into the template
    const post = '/post/775945015353556992';
    const indexPageWrapper = htmlElem.querySelector('.index-page');
    fetch(post)
        .then(res => res.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const container = doc.querySelector('.go');
            indexPageWrapper.appendChild(container);
        })
        .catch(err => console.log(err))
        .finally(() => indexPageWrapper.classList.add(fadeInClass))
};

export {
    indexPageContent
}