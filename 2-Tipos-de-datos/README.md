# Tipos de Datos en TypeScript

En TypeScript, los tipos de datos se utilizan para declarar el tipo de valores que pueden almacenarse en una variable. A continuación, se presentan algunos ejemplos de tipos de datos en TypeScript junto con ejemplos:

1. **`number`:** Representa números, ya sean enteros o de punto flotante.

   ```typescript
   let edad: number = 25;
2. **`number`:** Representa cadenas de textos.

   ```typescript
   let nombre: string = "Juan";
3. **`boolean`:** Representa valores booleanos, es decir, true o false.

   ```typescript
   let esMayorDeEdad: boolean = true;
4. **`array`:** Representa una lista de elementos del mismo tipo.

   ```typescript
   let numeros: number[] = [1, 2, 3, 4, 5];

   let frutas: Array<string> = ["manzana", "banana", "cereza"];
5. **`number`:** Representa una lista fija de elementos, donde cada elemento puede tener un tipo diferente.

   ```typescript
   let persona: [string, number] = ["Juan", 30];
6. **`enum`:** Representa un conjunto de constantes con nombres significativos.

   ```typescript
   enum Días {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes}

    let díaLaboral: Días = Días.Lunes;
7. **`any`:** Es un tipo que puede representar cualquier valor y desactiva la verificación de tipos, El uso excesivo de any debe evitarse en la medida de lo posible para aprovechar las ventajas del sistema de tipos de TypeScript.

   ```typescript
   let variableAny: any = "Hola";
5. **`void`:** Se utiliza principalmente como tipo de retorno de funciones que no devuelven ningún valor.

   ```typescript
   function imprimirMensaje(): void {
    console.log("Hola, TypeScript");
    }

Estos son solo algunos ejemplos básicos. TypeScript admite muchos otros tipos y características avanzadas que permiten modelar de manera más precisa la forma en que se utilizan los datos en una aplicación, se puede leer más en la [documentacion de TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). La ventaja clave de utilizar tipos en TypeScript es la detección temprana de errores y el mejor soporte para herramientas de desarrollo.