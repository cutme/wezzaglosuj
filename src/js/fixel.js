import stickybits from 'stickybits';

document.addEventListener('DOMContentLoaded',function() {
    
    const init = function() {
        const stickybit = stickybits('.js-photo');
        const stickybitNav = stickybits('.js-stickybit');
    };

    document.getElementsByClassName('js-photo')[0] ? init() : false;

}, false);

