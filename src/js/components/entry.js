/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* entry function */
import { hiddenClass, entryElem } from './globals';
import { retrieveFromSessionStorage, addToSessionStorage } from '../utils/utilsStorage';

const entry = () => {
    const sesstionStorageItemIsSet = retrieveFromSessionStorage('entry');

    if (sesstionStorageItemIsSet) {
        entryElem.classList.add(hiddenClass);
    } else {
        entryElem.classList.remove(hiddenClass);
    }

    entryElem.addEventListener('click', (e) => {
        e.preventDefault();
        // entryElem.classList.add(fadeOutClass);
        // addToSessionStorage('entry', 1);
    });

    // entryElem.addEventListener('animationend', () => {
    //     entryElem.classList.add(hiddenClass);
    // });
}

export {
    entry
}