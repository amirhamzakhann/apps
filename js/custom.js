// Custom Function Start Here

$(function () {

    //  Banner Image Right Side Jquery Code Start Here
    $('.banner-right-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        spped: 300,
        fade: true,
      });
    //  Banner Image Right Side Jquery Code End Here

    //  Sticky Header Jquery Code Start Here
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > 100) {
            $('.header').addClass('header-bg');
        } else {
            $('.header').removeClass('header-bg');
        }
    });
    //  Sticky Header Jquery Code End Here

    //  Header Typed Jquery Code Start Here
    $(function () {
        $(".typed").typed({
            strings: ["template.", "designer.", "creative."],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 500000,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function () {},
            // starting callback function before each string
            preStringTyped: function () {},
            //callback for every typed string
            onStringTyped: function () {},
            // callback for reset
            resetCallback: function () {}
        });
    });
    //  Header Typed Jquery Code End Here

    //  MixitUp Jquery Code Start Here
    var containerEl = document.querySelector('.project-mix');
    var mixer = mixitup(containerEl);
    //  MixitUp Jquery Code End Here

    //  Counter Up Jquery Code Start Here
    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });
    //  Counter Up Jquery Code End Here

    //  Common Jquery Code Start Here

    //  Common Jquery Code End Here

});
// Custom Function End Here