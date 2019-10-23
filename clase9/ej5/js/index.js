$(function(){
  $("p:last").hide(4000,function(params){
    $("p:last").show(4000);
  });

  $("#btnEnviar").toggle(4000,function(params) {
    $("#btnEnviar").toggle(4000);
  });

  $("#btnEnviar").click(function(){
    $("#btnEnviar").animate({
      height: "+=50px",
      width: "+=50px",
    },2000).animate({
      height: "-=50px",
      width: "-=50px",
    });
  });
});
