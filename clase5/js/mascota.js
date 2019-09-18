let mascotas = [];

function Mascota(nombre,edad,tipo,castrado,vacunado,desparasitado,alimento){
  this.nombre = nombre;
  this.edad = edad;
  this.tipo = tipo;
  this.castrado = castrado;
  this.vacunado = vacunado;
  this.desparacitado = desparasitado;
  this.alimento = alimento;

  Mascota.prototype.toString = function(){
    console.log(`hola soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

let m1 = new Mascota("Bobby",3,"perro",true,false,true,"carne");
m1.toString();
