//FUNCIONES

//DECLARACION DE UNA FUNCION CON TIPADO EXPLICITO
function sumar(a: number, b: number): number {
  return a + b;
}

//FUNCIONES FLECHA CON RETORNO IMPLICITO (INFERIDO POR TYPESCRIPT)
const dividir = (a: number, b: number)=> a / b;

//FUNCIONES CON PARAMETROS OPCIONALES
function saludar(nombre: string, edad?: number): string {
  if (edad !== undefined) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
  } else {
    return `Hola, mi nombre es ${nombre}.`;
  }
}

//FUNCIONES CON PARAMETROS POR DEFECTO
function saludar2(nombre: string, edad: number = 30): string {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}