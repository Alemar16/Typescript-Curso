// INTERFACES EN TIPOS DE DATOS (INTERFACES IN TYPESCRIPT)

//se crea una interfaz para programador con las propiedades de nombre y tecnologias 
interface programador {
  nombre: string;
  tecnologias: string[];
  experiencia?: boolean | null;
}


// se crea un objeto de tipo programador
const dev: programador = {
  nombre: "Sergio",
  tecnologias: ["html", "css", "js"],
  experiencia: true,
};

const dev2: programador = {
  nombre: "Pedro",
  tecnologias: ["react", "angular", "js"],
  experiencia: false,
};

// se crea una funcion que recibe un objeto de tipo programador
function enviarCurriculum(programador: programador) {
  console.log(`Enviando curriculum a ${programador.nombre}`);
}


// se llama la funcion enviarCurriculum con el objeto de tipo programador
enviarCurriculum(dev);
