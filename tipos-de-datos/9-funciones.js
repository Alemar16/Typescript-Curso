"use strict";
//FUNCIONES
//DECLARACION DE UNA FUNCION CON TIPADO EXPLICITO
function sumar(a, b) {
    return a + b;
}
//FUNCIONES FLECHA CON RETORNO IMPLICITO (INFERIDO POR TYPESCRIPT)
const dividir = (a, b) => a / b;
//FUNCIONES CON PARAMETROS OPCIONALES
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}
//FUNCIONES CON PARAMETROS POR DEFECTO
function saludar2(nombre, edad = 30) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
