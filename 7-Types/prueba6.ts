// types en objetos

//PRIMERO SE CREA UN TIPO DE OBJETO QUE SERA DE REFRENCIA PARA LOS OBJETOS
type programador3 = {
  nombre: string,
  tecnologias: string[],
  experiencia?: boolean | null, // el signo de interrogacion indica que la propiedad es opcional
}

// SEGUNDO SE CREA UN OBJETO
const programador3: programador3 = {
  nombre: 'Sergio',
  tecnologias: ['html', 'css', 'js'],
  experiencia: true
}

const programador4: programador3 = {
  nombre: 'Pedro',
  tecnologias: ['react', 'angular', 'js'],
  experiencia: false
}

const programador5: programador3 = {
  nombre: 'Juan',
  tecnologias: ['html', 'css', 'js'],
  experiencia: null 
}