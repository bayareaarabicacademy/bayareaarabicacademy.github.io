$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

const $navbar = $('.navbar');

$('a[href^="#"]').click(function () {
    const scroll = $($(this).attr('href')).position().top - $navbar.outerHeight();

    $('html, body').animate({scrollTop: scroll}, 600);

    return false;
});
