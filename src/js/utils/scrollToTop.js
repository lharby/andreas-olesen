/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

import { body } from "../components/globals";

const scrollToTop = () => {
    body.scrollIntoView({ behavior: 'smooth' });
};

export {
    scrollToTop
}