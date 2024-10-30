$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main_visual_slide .swiper-pagination",
            clickable: true
        },

    })
})

$(function () {
    const mainSetSlide = new Swiper('.main_set_slide', {
        //slidesPerView: "4",
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_set .arrows .next',
            prevEl: '.main_set .arrows .prev',
        },

    })
})


$(function () {
    $('.main_hot .inner .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx)
        $('.main_hot .tab_content .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this).parent().addClass('on').siblings().removeClass('on')
    })
});

$(function () {
    const mainHotslide = new Swiper('.tab_slide', {
        slidesPerView: "3",
        spaceBetween: 30,
    })
})

$(function () {
    const mainInstaSlide = new Swiper('.main_insta_slide', {
        slidesPerView: "6",
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".bar",
            hide: false,
            draggable: true,
            dragSize: 100,
            loop: true,
        },
    })
})

