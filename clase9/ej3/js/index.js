$(function(){
  $('#btnEnviar').click(function()
  {
    console.log($("p.rojo").text());
    console.log($("p:last").html());
    console.log($("#btnEnviar").val());
    console.log($("#btnCambiar").attr("id"));
  });

  $('#btnCambiar').click(function()
  {
    $("p.rojo").text("Nuevo texto de p rojo");
    $("p:last").html("<strong>Nuevo texto de p en negrita</strong>");
    $("p:last").html(function(i,prevHTML) {
      return prevHTML + "Agrego mas html";
    });
    $("#btnCambiar").val("Nuevo Cambiar");
    $("#btnCambiar").attr("class","azul");
  });

  $("#btnEnviar").attr({
    "class": "azul",
    "miAtributo": "miValor"
  });

  $("#btnEnviar").attr("class",function(i,preValue) {
    console.log("Clase anterior: "+preValue);
    return "rojo";
  });

  var boton = $("<input>").val("Nuevo boton").attr("type","button");

  //$("#btnCambiar").after(boton);

  $("body").prepend(boton);
});
