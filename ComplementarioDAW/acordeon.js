$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['imagen1', 'imagen2', 'imagen3'],
        menu: '#menu',
        scrollingSpeed: 1000,
        horizontalScrolling: true,
        slidesNavigation: true,
        controlArrows: false,
        loopHorizontal: false
    });

    
    $('.acordeon-img').on('click', function() {
        const index = $(this).data('index');
        $.fn.fullpage.moveTo(index + 1);
    });
});

