export default class AttachSwipeEvent {
    constructor(options) {
        this.xDown = null;
        this.yDown = null;
        this.options = options;
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        document.addEventListener('touchstart', this.handleTouchStart, false);
        document.addEventListener('touchmove', this.handleTouchMove, false);
    }

    onLeft() {
        this.options.onLeft();
    }

    onRight() {
        this.options.onRight();
    }

    onUp() {
        this.options.onUp();
    }

    onDown() {
        this.options.onDown();
    }

    static getTouches(evt) {
        return evt.touches // browser API

    }

    handleTouchStart(evt) {
        const firstTouch = AttachSwipeEvent.getTouches(evt)[0];
        this.xDown = firstTouch.clientX;
        this.yDown = firstTouch.clientY;
    }

    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;


        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 && this.options.onLeft) {
                /* left swipe */
                this.onLeft();
            } else if (this.options.onRight) {
                /* right swipe */
                this.onRight();
            }
        } else {
            if ( yDiff > 0 && this.options.onUp) {
                /* up swipe */
                this.onUp();
            } else if (this.options.onDown){
                /* down swipe */
                this.onDown();
            }
        }

        /* reset values */
        this.xDown = null;
        this.yDown = null;
    }
}