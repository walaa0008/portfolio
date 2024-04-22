



$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .nav-item .contact").click(function(){
 $(".about-me,#my-carousel,#experience,#portofilo").hide(),
  $(".details").show();
  
  });
});




$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .nav-item .about").click(function(){
 $(".details,#my-carousel,#experience,#portofilo").hide(),
  $(".about-me").show();
  
  });
});


$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .active").click(function(){
 $(".about-me , .details ,#experience,#portofilo").hide(),
  $("#my-carousel").show();
  
  });
});


$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .experience").click(function(){
 $(".about-me , .details ,#my-carousel,#portofilo").hide(),
  $("#experience").show();
  
  });
});



$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .portofilo").click(function(){
 $(".about-me , .details ,#my-carousel ,#experience").hide(),
  $("#portofilo").show();
  
  });
});





$(document).ready(function(){
  $("i").tooltip();

});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});



$(document).ready(function(){
  $(".item").mouseenter(function(){
    $(".footer-copyright img").slideDown(30000);


  });
  });

  
  $(window).on('load', function(){ 
 $(".se-pre-con").fadeOut(1000); 
 });
 
 
