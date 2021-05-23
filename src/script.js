$(window).scroll(function(e){
  if($(window).scrollTop()>0)
   $(".navbar").addClass("bg-light")
  else
    $(".navbar").removeClass("bg-light")
});

let s = skrollr.init();