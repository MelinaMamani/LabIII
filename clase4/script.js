/*function Persona (nombre, apellido,edad){
  this.nombre = nombre,
  this.apellido = apellido,
  this.edad = edad,

  this.saludar = function()
  {
    return "Hola, me llamo " + this.nombre;
  }
};

Persona.prototype.altura = 1.6;

var p1 = new Persona("Jose","Alvarez",34);
console.log(p1.saludar());

p1.altura = 1.77;

var p2 = new Persona("Ana","Alvarez",24);
console.log(p2.saludar());

console.log(p1.altura);
console.log(p2.altura);
*/
var x;

function foo(a,b,c){
  console.log(arguments);
}

x = foo;

x(23,12,null);
