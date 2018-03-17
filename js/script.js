$(document).ready(function() {
    $(".testimonial-carousel").slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 6000,
        prevArrow: $(".testimonial-carousel-controls .prev"),
        nextArrow: $(".testimonial-carousel-controls .next")
    });
    /*$(function() {
        var BV = new $.BigVideo({container: $('#video_bg')});

        BV.init();
        BV.getPlayer().pause();

        BV.show('video/SAMS_Advert.mp4', {doLoop:true}, {autoplay:true});

    });*/
    $(".features_card").mouseover( function (e) {
        // body...
        console.log(e.target.value);
        $(this).find(".feature_details").show();
         $(this).toggleClass('flip');
    })
    $(".features_card").mouseleave( function (e) {
        // body...
        console.log(e.target.value);
        $(this).find(".feature_details").hide();
    })
    // var card = document.querySelector('.features_card');
    // function flipCard(e){
    //     console.log(e.target);
    //     (this).find(".feature_detaiils").show();
    // }
    // card.addEventListener('mouseover', flipCard);
});
