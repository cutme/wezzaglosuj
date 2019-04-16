document.addEventListener('DOMContentLoaded', function() {
    
    
    const showmore = document.getElementsByClassName('js-more')[0];
    
    
    const init = function() {
    
        const moreContent = document.getElementsByClassName('js-more--content')[0];


        const showHideContent = function(e) {
        
            moreContent.classList.remove('is-hidden');
            
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }
    
        
        
        showmore.addEventListener('click', showHideContent);
    }
    
    
    showmore ? init() : false;


}, false);
