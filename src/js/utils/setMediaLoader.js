/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* media loader functions */
import { htmlElem } from '../components/globals';
import { setLoading, removeLoading } from './ajaxLoaders';

const setMediaLoader = () => {
    const modal = 'modal';
    const modalElem = htmlElem.querySelector('.' + modal);
    const modalInner = modalElem.querySelector('.' + modal + '__inner');
    const media = modalInner.querySelectorAll('img');
    setLoading(modalElem);

    function loaded() {
       removeLoading(modalElem);
    };

    if ([...media].length) {
        [...media].forEach(item => {
            if (item && item.complete) {
                loaded();
            } else if (!item) {
                loaded();
            } else {
                item?.addEventListener('load', loaded)
                item?.addEventListener('error', function() {
                    console.log('error loading image');
                })
            };
        });
    } else {
        loaded();
    }

};

export { setMediaLoader };