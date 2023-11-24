//INTERFACES

//INTERFACE BASICA
interface Persona{
  nombre: string;
  edad: number;
}

//INTERFACE CON PROPIEDADES OPCIONALES
interface Producto{
  nombre: string;
  precio?: number;// el signo de interrogacion indica que la propiedad es opcional(puede tneer valor o no)
  descripcion: string;
}

//INTERFACE PARA FUNCIONES
interface Comparador{
  (a: number, b: number): boolean;
}

//INTERFACE PARA CLASES (CLASS INTERFACE)
interface Persona{
  nombre: string;
  edad: number;
  saludar(): void;
}