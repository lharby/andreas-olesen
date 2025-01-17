/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* ajax loader functions */
const loadingClass = 'loading';

const setLoading = (elem) => {
    elem.classList.add(loadingClass);
};

const removeLoading = (elem) => {
    elem.classList.remove(loadingClass);
}

export {
    setLoading,
    removeLoading
}