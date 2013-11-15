
$(document).ready(function(){
  $('.brand').click(function(){
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
    return false;
  });
  
  $('.nav li a').each(function(idx, e){
    $(e).click(function(){
      var navbar_height = ($(window).width() <= 979) ? 10 : -60;
      $('html,body').animate({
        scrollTop: $('.container:eq('+(idx+3)+')').offset().top + navbar_height
      }, 'slow');

      if (navbar_height == 0) {
        $('.btn-navbar').click();
      }
      return false;
    });
  });

})


