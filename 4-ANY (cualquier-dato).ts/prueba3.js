"use strict";
let disney; // por defecto me define la variable como any
//primera opcion por defecto me reconoce como string
disney = 'Star Wars y Marvel';
console.log(disney);
//segunda opcion 
disney = 240000;
console.log(disney);
//tercera opcion
disney = true;
console.log(disney);
//No se recomienda usar este tipo de datos (any) siempre debes tener especificada el tipo de datoen las variables a usar
//ejemplo:
let disney2;
disney2 = 'Star Wars y Marvel';
