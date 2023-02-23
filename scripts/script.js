$(document).ready(function() {
    $('.animsition-overlay').animsition({
    inClass: 'overlay-slide-in-bottom',
    outClass: 'overlay-slide-out-top',
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body'
    })
    .one('animsition.inStart',function(){

    $('body').removeClass('bg-init');

    $(this)
        .find('.item')
        .append('<h2 class="target">Callback: Start</h2>');

    console.log('event -> inStart');
    })
    .one('animsition.inEnd',function(){
    $('.target', this).html('Callback: End');

    console.log('event -> inEnd');
    });
});



$(window).scroll(function() {

// selectors
var $window = $(window),
    $body = $('body'),
    $panel = $('.datacolor');

// Change 33% earlier than scroll position so colour is there when you arrive.
var scroll = $window.scrollTop() + ($window.height() / 3);

$panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        
    // Remove all classes on body with color-
    $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
    });
    
    // Add class of currently active div
    $body.addClass('color-' + $(this).data('color'));
    }
});    

}).scroll();