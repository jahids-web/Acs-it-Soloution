$(function () {

    //////nav bar start///
    $(function () {
        var $dis = $(".acs_nav").offset().top;
        $(window).scroll(function () {
            var $scroll = $(this).scrollTop();
            if ($scroll >= $dis) {
                $(".acs_nav").addClass("fixed")
            } else {
                $(".acs_nav").removeClass("fixed")
            }

        })
    });
    /////nav nar end/////
    
   
    ////back to top////
       
    $(function () {
        $(window).scroll(function () {

            var $scroll = $(this).scrollTop();

            if ($scroll >= 200) {
                $(".top i").fadeIn();
            } else {
                $(".top i").fadeOut();
            }
        })

        $(".top i").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 3000)
        })
    })

    ////back to top////
    



    ////////function end/////////
});
