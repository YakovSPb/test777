$(function() {

        var link = $('.gumburger');
        var close = $('.m-menu__button--close');
        var menu = $('.m-menu');
        link.on('click', function(event){
            event.preventDefault();
            menu.toggleClass('m-menu__active')
        });
        close.on('click', function(event){
            event.preventDefault();
            menu.toggleClass('m-menu__active')
        });
        

});
