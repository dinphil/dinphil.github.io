// Navbar scrolling using JQuery animations

$(document).ready(function(){

    $('#cw-menu').click(function(){
        
        $('html, body').animate({
            scrollTop: $("#cw-section").offset().top
        }, 500);
        
    }); 
    $('#cc-menu').click(function(){
        
        $('html, body').animate({
            scrollTop: $("#cc-section").offset().top
        }, 500);
        
    });
    $('#hack-menu').click(function(){
        
        $('html, body').animate({
            scrollTop: $("#hack-section").offset().top
        }, 500);
        
    });
    
});
