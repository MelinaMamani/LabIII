$(function(){
  $('#btnEnviar').click(function()
  {
    alert("Hiciste click en el botón");
  });

  /*$("p").hover(function()
  {
    console.log("Hola");
  },
  function () {
    console.log("Chau");
  });

  $("p.rojo").on("click",function() {

  })*/

  $("p.rojo").on({
    "click": function() {
      console.log("Hiciste click en p rojo");
    },

    "mouseenter": function() {
      console.log("Entraste en p rojo");
    },

    "mouseleave": function() {
      console.log("Saliste de p rojo");
    }
  });

  $("p.rojo").off("click");
});
