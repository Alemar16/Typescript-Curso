"use strict";
// Encapsulamiento y Genericos en TypeScript
//El encapsulamiento es un concepto en programación orientada a objetos que se refiere a la restricción del acceso a ciertos detalles internos de un objeto y la protección de sus datos.
//Los genéricos en TypeScript permiten escribir código que puede trabajar con varios tipos de datos sin perder la información sobre esos tipos. 
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el tiket es ${this.ticket}`;
    }
}
// se usa <number> para definir el tipo de dato para el parametro
let sorteo1 = new Sorteo('Natalia');
sorteo1.setTicket(123); //  el tipo de dato es un number
console.log(sorteo1.sortear());
// se usa <string> para definir el tipo de dato para el parametro
let sorteo2 = new Sorteo('Manuel');
sorteo2.setTicket('iten-44'); // se debe especificar el tipo de dato en comillas por ser un string
console.log(sorteo2.sortear());
