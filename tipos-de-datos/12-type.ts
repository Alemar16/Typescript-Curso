//TYPES

//TYPE BASICO
type Numero = number;

//TYPE BASICO OBJETO lITERAL
type Persona1 = {
  nombre: string;
  edad: number;
}

//TYPE CON UNION DE TIPOS
type Producto1 = {
  nombre: string;
  precio: number | string;
  descripcion?: string;
}

//TYPE PARA FUNCIONES
type Comparador1 = {
  (a: number, b: number): boolean;
}

//TYPE PARA CLASES (CLASS TYPES)
type Persona2 = {
  nombre: string;
  edad: number;
  saludar(): void;
}