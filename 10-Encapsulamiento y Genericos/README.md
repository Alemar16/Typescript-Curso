# Encapsulamiento y Genéricos en TypeScript 


## Encapsulamiento:

El encapsulamiento es un concepto que restringe el acceso a detalles internos de un objeto y protege sus datos. En TypeScript, la propiedad ticket de la clase Sorteo está marcada como privada (private), lo que significa que solo se puede acceder a ella dentro de la propia clase Sorteo. Esto ayuda a controlar el acceso y modificación de los datos de la clase.

## Genéricos:

Los genéricos en TypeScript permiten escribir código que puede trabajar con varios tipos de datos sin perder información sobre esos tipos. En este ejemplo, T es un tipo genérico que representa el tipo del ticket en la clase Sorteo. Esto permite que Sorteo pueda trabajar tanto con números como con cadenas, manteniendo el tipo de manera segura.

### Ejemplo de Sorteo

```typescript
class Sorteo<T> {
  private ticket?: T;

  constructor(private nombre: string) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`;
  }
}

let sorteo1 = new Sorteo<number>('Natalia');
sorteo1.setTicket(123);
console.log(sorteo1.sortear());

let sorteo2 = new Sorteo<string>('Manuel');
sorteo2.setTicket('item-44');
console.log(sorteo2.sortear());
```

### Ejemplo de uso

```typescript
let sorteo1 = new Sorteo<number>('Natalia');
sorteo1.setTicket(123);
console.log(sorteo1.sortear());

let sorteo2 = new Sorteo<string>('Manuel');
sorteo2.setTicket('item-44');
console.log(sorteo2.sortear());

```

## Las diferencias fundamentales con JavaScript son que TypeScript introduce el concepto de private para controlar el acceso a propiedades y métodos, y los genéricos para escribir código más flexible y reutilizable.