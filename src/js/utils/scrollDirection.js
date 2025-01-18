/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* detect scroll direction
 * import { scrollDirection } from './utils/events/scrollDirection';
 * scrollDirection((scrollPos, previousScrollPos) => {
 *    if (previousScrollPos > scrollPos) {
 *       // scrolling up
 *    } else {
 *       // scrolling down
 *    }
 *});
 */

const scrollDirection = (fn) => {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener('scroll', function() {
        let previous_known_scroll_position = last_known_scroll_position;
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                fn(last_known_scroll_position, previous_known_scroll_position);
                ticking = false;
            });
            ticking = true;
        }
    });
};

export { scrollDirection };