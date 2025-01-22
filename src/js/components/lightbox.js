/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* lightbox */
import { htmlElem } from "./globals";

const lightbox = () => {
    const wrapper = htmlElem.querySelector('#posts');
    const images = wrapper.querySelectorAll('img');
    const modal = 'modal';
    const modalBackdrop = htmlElem.querySelector('.' + modal + '__backdrop');
    const modalElem = htmlElem.querySelector('.' + modal);
    const modalInner = modalElem.querySelector('.' + modal + '__inner');
    const closeClass = 'modal__close';
    
    images.forEach(item => {
        item.addEventListener('click', () => {
            modalBackdrop.classList.add(modal + '__backdrop--show');
            modalElem.classList.add(modal + '--show');
            let src = item.getAttribute('src');
            src = src.replace('_500', '_1280');
            const template = '<img src="' +src+ '" class="modal__image" />';
            modalInner.insertAdjacentHTML('beforeend', template);
        });
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains(closeClass)) {
            closeModal();
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains(modal + '__image')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalElem.classList.contains(modal + '--show')) {
            closeModal();
        }
    });

    const closeModal = () => {
        modalBackdrop.classList.remove(modal + '__backdrop--show');
        modalElem.classList.remove(modal + '--show');
        modalInner.replaceChildren();
    }
}

export {
    lightbox
}