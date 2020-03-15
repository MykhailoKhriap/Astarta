$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");

    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});

$(document).ready(function() {
    $(".worck_wrapper > .dtn_worck").on("click", function(e) {
        e.preventDefault();
        let $this = $(this);

        if ($this.hasClass('active')) {
            $this.removeClass("active");
            $this.siblings('.content').hide(50);
            $this.closest('.worck_dlock').removeClass('active');
            $this.find('span').text('Подробнее');
        } else {
            $(".worck_wrapper > .dtn_worck").removeClass("active");
            $this.addClass("active");
            $('.content').hide(50);
            $this.siblings('.content').slideDown(50);
            $('.worck_dlock').removeClass('active');
            $this.closest('.worck_dlock').addClass('active');
            $('.worck_dlock span').text('Подробнее');
            $this.find('span').text('Скрыть');
        }
    });
});

$("li").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

$(".d-flex").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

$(".footer_nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });









