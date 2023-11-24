"use strict";
//ENUM (ENUMERADOS)
//DEFICNICION DE UN ENUM PARA DIAS DE LA SEMANA
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
//DECLARACION DE UN ENUM CON VALOR INICIAL
var DiasSemana2;
(function (DiasSemana2) {
    DiasSemana2["Lunes"] = "Lunes";
    DiasSemana2["Martes"] = "Martes";
    DiasSemana2["Miercoles"] = "Miercoles";
    DiasSemana2["Jueves"] = "Jueves";
    DiasSemana2["Viernes"] = "Viernes";
    DiasSemana2["Sabado"] = "Sabado";
    DiasSemana2["Domingo"] = "Domingo";
})(DiasSemana2 || (DiasSemana2 = {}));
//ENUM CON VALORES DE CADENA (STRING ENUM)
var Colorers;
(function (Colorers) {
    Colorers["Rojo"] = "Rojo";
    Colorers["Verde"] = "Verde";
    Colorers["Azul"] = "Azul";
})(Colorers || (Colorers = {}));
//ENUM CON VALORES DE NUMEROS
var Numeros;
(function (Numeros) {
    Numeros[Numeros["Uno"] = 1] = "Uno";
    Numeros[Numeros["Dos"] = 2] = "Dos";
    Numeros[Numeros["Tres"] = 3] = "Tres";
    Numeros[Numeros["Cuatro"] = 4] = "Cuatro";
    Numeros[Numeros["Cinco"] = 5] = "Cinco";
})(Numeros || (Numeros = {}));
