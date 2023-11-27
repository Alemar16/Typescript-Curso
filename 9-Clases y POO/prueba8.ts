//clases

class Pelicula {
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

const peli = new Pelicula("Joker", ["Joaquin Phoenix", "Robert De Niro"], [
  "Joaquin Phoenix",
  "Robert De Niro",
  "Zazie Beetz",
  "Bill Murray",
])

const peli2 = new Pelicula( "Titranic", ["Leonardo DiCaprio", "Kate Winslet"], ["Leonardo DiCaprio", "Kate Winslet", "Javier Bard", "Morgan Freeman", "Sandra Bullock"])

peli.proyectarEnCine()
console.log(peli)
peli2.proyectarEnCine()
console.log(peli2)