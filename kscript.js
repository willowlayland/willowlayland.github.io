window.addEventListener('load', function () {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
});


$(window).scroll(function(){ //scroll animations
  
   /* header */
    if($(document).scrollTop() > 0) {
        $('#header').addClass('small');
    } else {
        $('#header').removeClass('small');
    }
  
   /* back to top button */
  $(".top").css("opacity", 0 + $(window).scrollTop() / 250);
  
  
   /* fade in sections */
//   $('.inner').each( function(i){
//       var bottom_of_object = $(this).offset().top - $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();

//     if( bottom_of_window > bottom_of_object ){
//       $(this).animate([{'opacity':'1'}, { transform: 'translateY(0px)' },
//   { transform: 'translateY(-300px)' }
// ],  2);
//     }
//   });
  
});