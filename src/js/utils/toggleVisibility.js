/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* toggle visibility */
import { hiddenClass } from '../components/globals';
import { retrieveFromSessionStorage, addToSessionStorage } from '../utils/utilsStorage';

const toggleVisibility = (elem) => {
    const sesstionStorageItemIsSet = retrieveFromSessionStorage('entry');

    if (sesstionStorageItemIsSet) {
        elem.classList.add(hiddenClass);
    } else {
        elem.classList.remove(hiddenClass);
    }

    if (elem.classList.contains(hiddenClass)) {
        elem.classList.remove(hiddenClass);
        sessionStorage.removeItem('entry');
    } else {
        elem.classList.add(hiddenClass);
        addToSessionStorage('entry', 1);
    }
};

export {
    toggleVisibility
}