$(document).ready(function(){

  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 120){
      $(".menu-wrapper").removeClass('menu-no-scroll');
      $(".menu-wrapper").addClass('menu-scroll');
    }
    else{
      $(".menu-wrapper").removeClass('menu-scroll');
      $(".menu-wrapper").addClass('menu-no-scroll');
    }
  });

});
