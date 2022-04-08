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
});