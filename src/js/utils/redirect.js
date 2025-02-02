/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* redirect function */

const arrPaths = document.location.pathname.split('/');
const primaryDir = arrPaths[1];

const redirect = (currentPage, newPage) => {
    if (primaryDir === currentPage) {
        document.location = newPage;
    }
}

export {
    redirect
}
