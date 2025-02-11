/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* router */
import { htmlElem, pageWrapper, indexClass } from './globals';
import { removeLoading } from '../utils/ajaxLoaders';
import { dynamicFunctions } from '../app';
import { scrollToTop } from '../utils/scrollToTop';
let documentTitle;

const router = () => {
    document.addEventListener('click', event => {
        const link = event.target.closest('a');
        if (link && link.getAttribute('href')?.startsWith('/')) {
            event.preventDefault();
            event.stopPropagation();
            let href = link.getAttribute('href');
            let hrefName = href.substring(1);
            let arrHrefs = href.split('/').filter(item => item !== '');
            fetch(href)
                .then(res => res.text())
                .then(html => {
                    htmlElem.removeAttribute('class');
                    if (href === '/') {
                        htmlElem.classList.add(indexClass);
                    } else {
                        htmlElem.classList.add(...arrHrefs);
                    }
                    updateContent(html);
                    history.pushState({ path: href }, documentTitle, '/' + hrefName);
                    routerCallback();
                })
                .catch(err => {
                    console.log('Something went wrong.', err);
                    removeLoading(htmlElem);
                });
        } else {
            return;
        }
    });
};

const updateContent = input => {
    pageWrapper.replaceChildren();
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');
    const container = doc.querySelector('#container');
    pageWrapper.appendChild(container);
    documentTitle = doc.querySelector('title').textContent;
};

const routerCallback = () => {
    removeLoading(htmlElem)
    document.title = documentTitle || document.title;
    dynamicFunctions();
    scrollToTop();
};

export {
    router
}