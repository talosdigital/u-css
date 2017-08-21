$(document).ready(function(){
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 120){
      $(".navbar").css("background","#e91e63");
      $(".navbar").css("top","0");
      $(".navbar").css("box-shadow","0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)");
    }
    else{
      $(".navbar").css("background","transparent");
      $(".navbar").css("top","64px");
      $(".navbar").css("box-shadow","none");
    }
  });
});
