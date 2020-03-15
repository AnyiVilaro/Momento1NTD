A=parseInt(prompt("Introduce el numero de niños"));

B=parseInt(prompt("Introduce el numero de niñas"));

porcentaje_A=(A*100)/(A+B);

porcentaje_B=100-porcentaje_A;

alert("Hay un "+porcentaje_A+" % de niños");

alert("Hay un "+porcentaje_B+" % de niñas");