$(document).ready(function(){
  var menu = $(".menu");
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 120){
      menu.removeClass('navbar-no-scroll');
      menu.addClass('navbar-scroll');
    }
    else{
      menu.removeClass('navbar-scroll');
      menu.addClass('navbar-no-scroll');
    }
  });
});
