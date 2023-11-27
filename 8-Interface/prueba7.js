"use strict";
// INTERFACES EN TIPOS DE DATOS (INTERFACES IN TYPESCRIPT)
// se crea un objeto de tipo programador
const dev = {
    nombre: "Sergio",
    tecnologias: ["html", "css", "js"],
    experiencia: true,
};
const dev2 = {
    nombre: "Pedro",
    tecnologias: ["react", "angular", "js"],
    experiencia: false,
};
// se crea una funcion que recibe un objeto de tipo programador
function enviarCurriculum(programador) {
    console.log(`Enviando curriculum a ${programador.nombre}`);
}
// se llama la funcion enviarCurriculum con el objeto de tipo programador
enviarCurriculum(dev);
