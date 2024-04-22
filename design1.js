



$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .nav-item .İletişim").click(function(){
 $(".bilgi-me,#my-carousel,#deneyim,#portföy").hide(),
  $(".details").show();
  
  });
});




$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .nav-item .bilgi").click(function(){
 $(".details,#my-carousel,#deneyim,#portföy").hide(),
  $(".bilgi-me").show();
  
  });
});


$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .active").click(function(){
 $(".bilgi-me,.details,#deneyim,#portföy").hide(),
  $("#my-carousel").show();
  
  });
});


$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .deneyim").click(function(){
 $(".bilgi-me, .details ,#my-carousel,#portföy").hide(),
  $("#deneyim").show();
  
  });
});



$(document).ready(function(){
  $(".navbar-expand-lg .navbar-nav .portföy").click(function(){
 $(".bilgi-me , .details ,#my-carousel ,#deneyim").hide(),
  $("#portföy").show();
  
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
 $(".se-pre-con").fadeOut(3000); 
 });