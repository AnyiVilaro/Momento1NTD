var a = parseInt(prompt("ingrese el numero 1: ",0 ));

var b= parseInt(prompt("ingrese el numero 2: ",0 ));

console.log("A Inicial: " + a);
console.log("B Inicial: " + b);

var temporal=a;
a=b;
b=temporal;

console.log("A Final: " + a);
console.log("B Final: " + b);