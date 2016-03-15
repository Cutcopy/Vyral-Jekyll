console.log("congrats, I'm loaded.");
// Navbar scroll transition
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop <= 450){
      $("#top-nav").removeClass("nav-inverse");
      //$("#topnav-logo").addClass("hidden");
    }else{
      $("#top-nav").addClass("nav-inverse");
      //$("#topnav-logo").removeClass("hidden");
    }//if-else
  });//win func.
});//ready func.
