(function($){
    $('.nav a').on('click',function(){
        if ( !($(this).parent().hasClass('media-tab')) ) {
            $('.nav').find('.active').removeClass('active');
            $(this).parent().addClass('active');
        }
    });
    
})(window.jQuery);