# Uso de Clases en TypeScript: Ejemplo de Película

```typescript
class Película {
  nombre?: string;
  protagonista?: string[];
  actores?: string[];

  proyectarEnCine() {
    console.log(`${this.nombre} se proyecta en el cine.`);
  }

  constructor(nombre?: string, actores?: string[], protagonista?: string[]) {
    this.nombre = nombre;
    this.actores = actores;
    this.protagonista = protagonista;
  }
}
```
### Explicación:

#### 1. Propiedades:

    - nombre?: string;: La propiedad nombre es opcional (?), lo que significa que puede ser undefined.
    - protagonista?: string[];: La propiedad protagonista es opcional y es un array de strings.
    - actores?: string[];: La propiedad actores también es opcional y es un array de strings.

#### 2. Método proyectarEnCine():

    Este método simplemente imprime un mensaje utilizando la propiedad nombre.

#### 3. Constructor:

  - El constructor acepta tres parámetros opcionales (nombre, actores, protagonista) y los asigna a las propiedades correspondientes de la instancia (this).
  - Puedes crear instancias de la clase proporcionando o no valores para estos parámetros.

### Ejemplo de uso:
En este ejemplo, has creado dos instancias de la clase Película: peli y peli2.:
```typescript
const peli = new Película("Joker", ["Joaquin Phoenix", "Robert De Niro"], ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Bill Murray"]);

const peli2 = new Película("Titanic", ["Leonardo DiCaprio", "Kate Winslet"], ["Leonardo DiCaprio", "Kate Winslet", "Javier Bard", "Morgan Freeman", "Sandra Bullock"]);

```
Y puedes acceder a las propiedades y métodos de estas instancias:

```typescript
console.log(peli.nombre); // Joker
console.log(peli2.actores); // ["Leonardo DiCaprio", "Kate Winslet"]

peli.proyectarEnCine(); // Imprime: Joker se proyecta en el cine.
```

## Este es un ejemplo básico de cómo usar clases en TypeScript para modelar objetos con propiedades y métodos. Las clases te permiten encapsular la lógica relacionada con un concepto específico y crear instancias reutilizables de ese concepto en tu código