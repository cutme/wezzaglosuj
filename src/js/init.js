document.addEventListener('DOMContentLoaded',function() {

    let cover = document.getElementById('cover');
    
    window.onload = function() {
    
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        cover.remove();        
    };

}, false);