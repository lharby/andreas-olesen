/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* entry function */
import { entryElem, hiddenClass, fadeInClass, fadeOutClass } from './globals';
import { retrieveFromSessionStorage, addToSessionStorage } from '../utils/utilsStorage';

const entry = () => {

    // TODO
    // remove this before go live
    // testing only
    const isParam = location.search.split('param=')[1]
    if (isParam) {
        addToSessionStorage('entry', 1);
    }

    const sesstionStorageItemIsSet = retrieveFromSessionStorage('entry');

    if (entryElem) {
        const post = '/post/772134655141003264';
        fetch(post)
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const img = doc.querySelector('img').getAttribute('src');
                entryElem.style.backgroundImage = 'url(' + img + ')';
            })
            .catch(err => console.log(err));

        if (sesstionStorageItemIsSet) {
            entryElem.classList.add(hiddenClass);
        } else {
            entryElem.classList.remove(hiddenClass);
        }
    
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('entry')) {
                e.preventDefault();
                return false;
                // entryElem.classList.add(fadeOutClass);
                // addToSessionStorage('entry', 1);
            }
        });
    
        // entryElem.addEventListener('animationend', () => {
        //     entryElem.classList.add(hiddenClass);
        // });
    }

}

export {
    entry
}