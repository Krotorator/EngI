(function () { 

    $('.burger').on('click', function() {

        $('.burger').toggleClass('burger--active');
        $('.heading').toggleClass('heading--active');

    })

    var title = $('#section').eq(0);
    var heading = $('.heading');
    var burgCol = $('.burger__line');

    var waypoints = title.waypoint({
        handler: function (direction) {
            heading.toggleClass('heading--white');
            burgCol.toggleClass('burger__line--black');
            $('.evenz__heading').toggleClass('heading--transp');
            $('.dl__heading').toggleClass('heading--green');
        }
    })
 
    $('.form__input').click(function () {
        $(this).siblings().addClass('form__label--active');
        $(this).parent().addClass('form__item--animate');
        $(this).siblings().css("color", "#673AB7");
    })

    $('.form__input').blur(function () {
        $(this).parent().removeClass('form__item--animate');
        $(this).siblings().css("color", "rgba(0,0,0, .6)");
        if ($(this).val() == 0) {
            $(this).siblings().removeClass('form__label--active');
        }
    })

        

})();
