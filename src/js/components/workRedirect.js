/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* work redirect */
import { htmlElem } from "./globals";
import { redirect } from "../utils/redirect";

const workRedirect = () => {
    const firstItem = htmlElem.querySelector('.navigation-main__subnav > li a').getAttribute('href');
    redirect('work', firstItem);
}

export {
    workRedirect
}