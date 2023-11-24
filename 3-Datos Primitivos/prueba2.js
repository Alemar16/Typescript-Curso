"use strict";
//EJEMPLO BASICO COM NUMEROS
//primer caso
/* let interMiamni: number = 11;
let fcDallas: number = 11;

function jugar(equipo1: number, equipo2: number): void {
  if (equipo1 > equipo2) console.log("Gana Inter Miami");
  if (equipo1 == equipo2) console.log("Empate");
  if (equipo1 < equipo2) console.log("Gana FC Dallas");
}

jugar(interMiamni, fcDallas); */
//---------------------------------------------------------------
//segundo caso
let interMiamni = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ' porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log("Empate");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiamni, fcDallas, juegaMessi);
