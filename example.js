$(function() {

    var offset = $("#sidebar").offset();
    var topPadding = 15;

    $(window).scroll(function() {
    
        if ($(window).scrollTop() > offset.top) {
        
            $("#sidebar").stop().animate({
            
                marginTop: $(window).scrollTop() - offset.top + topPadding
            
            });
        
        } else {
        
            $("#sidebar").stop().animate({
            
                marginTop: 0
            
            });  
        
        }
        
            
    });

});