/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* lightbox */
import { htmlElem } from './globals';
import { enableScrollLock, disableScrollLock } from '../utils/scrollLock';
import { setMediaLoader } from '../utils/setMediaLoader';
import AttachSwipeEvent from '../utils/attachSwipeEvent';

const lightbox = () => {
    const wrapper = htmlElem.querySelector('#posts');
    const images = wrapper.querySelectorAll('img');
    const modal = 'modal';
    const modalBackdrop = htmlElem.querySelector('.' + modal + '__backdrop');
    const modalElem = htmlElem.querySelector('.' + modal);
    const modalInner = modalElem.querySelector('.' + modal + '__inner');
    const closeClass = modal + '__close';
    const previousClass = modal + '__previous'
    const nextClass = modal + '__next';
    let currentIndex = 0;
    let arrImages = [];

    images.forEach((item, index) => {
        let src = item.getAttribute('src');
        src = src.replace('_500', '_1280');
        arrImages.push(src);
        item.addEventListener('click', () => {
            openModal();
            currentIndex = index;
            fetch(src)
                .then((data) => {
                    const template = '<img src="' + data.url + '" class="fade-in" />';
                    modalInner.insertAdjacentHTML('beforeend', template);
                    setMediaLoader();
                    enableScrollLock();
                })
                .catch(error => {
                    console.log(error);
                });
        });
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains(previousClass)) {
            getPreviousImage();
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains(nextClass)) {
           getNextImage();
        }
    });

    const swiper = () => new AttachSwipeEvent({
        onLeft() {
            getPreviousImage();
        },
        onRight() {
            getNextImage()
        }
    });

    document.addEventListener('click', (event) => {
        if (
            event.target.classList.contains(closeClass) ||
            event.target.classList.contains(modal + '__image')
        ) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalElem.classList.contains(modal + '--show')) {
            closeModal();
        }
    });

    const getPreviousImage = () => {
        if (currentIndex === 0) {
            currentIndex = arrImages.length - 1;
        } else {
                currentIndex -= 1;
        }
        appendModal(arrImages, currentIndex);
    }

    const getNextImage = () => {
        if (currentIndex === arrImages.length -1) {
            currentIndex = 0;
        } else {
            currentIndex += 1;
        }
        appendModal(arrImages, currentIndex);
    }

    const openModal = () => {
        modalBackdrop.classList.add(modal + '__backdrop--show');
        modalElem.classList.add(modal + '--show');
    }

    const closeModal = () => {
        modalBackdrop.classList.remove(modal + '__backdrop--show');
        modalElem.classList.remove(modal + '--show');
        modalInner.replaceChildren();
        disableScrollLock();
    }

    const appendModal = (arr, index) => {
        modalInner.replaceChildren();
        const template = '<img src="' + arr[index] + '" class="fade-in" />';
        modalInner.insertAdjacentHTML('beforeend', template);
    }

    swiper();
}

export {
    lightbox
}