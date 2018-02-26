// ----------slick slider
$('.sl-slider').slick({

});


//---------- sticky header
$(window).on('scroll', function () {
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
});
$(document).ready(function () {
    $('.menu h4').click(function () {
        $('nav ul').toggleClass('active')
    })
});

// плавный переход по якорям 1
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
// плавный переход по якорям 2
// $(document).ready(function() {
//     $('a[href*=#]').bind('click', function(e) {
//         e.preventDefault();
//
//         var target = $(this).attr("href");
//
//         $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
//             location.hash = target;
//         });
//
//         return false;
//     });
// });

// плавный переход вверх страницы
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) $('a#move_up').fadeIn();
        else
            $('a#move_up').fadeOut(400);});
    $('a#move_up').click(function (){
        $('body,html').animate({
            scrollTop: 0}, 800);
        return false;
    });
});

// GOOGLE MAP

// function initMap() {
//     var element = document.getElementById('map');
//     var options = {
//         zoom: 15,
//         center: {lat: 38.70817424946782, lng: -77.0232224309857}
//     };

//     var myMap = new google.maps.Map(element, options);

//     var marker = new google.maps.Marker({
//         position: {lat: 38.70817424946782, lng: -77.0232224309857},
//         map: myMap,
//         icon: map,

//             panControl: false,
//             zoomControl: false,
//             scaleControl: false,
//             mapTypeControl:false,
//             streetViewControl:false,
//             overviewMapControl:false,
//             rotateControl:false,
//             styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
//     });
// }

function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.70817424946782, lng: -77.0232224309857},
        zoom: 15,
        map: map,
       
        panControl: false,
        zoomControl: false,
        scaleControl: false,
        mapTypeControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        rotateControl:false,
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    });

    var marker = new google.maps.Marker({
   		position: new google.maps.LatLng(38.70817424946782, -77.0232224309857) ,
   		map: map,
}); 

}

