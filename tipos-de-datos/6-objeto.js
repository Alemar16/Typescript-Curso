"use strict";
// OBJETO
const programador = {
    nombre: "Juan",
    casado: false,
    edad: 30,
    lenguajes: ["JavaScript", "Python", "Java"],
    proyectos: undefined,
    sueldo: null
};
//¿porque los objetos no estan typados?
/* En TypeScript, los objetos pueden estar tipados, pero también existe una flexibilidad inherente que permite que los objetos sean menos restrictivos en términos de tipos. Esto se debe a que TypeScript está diseñado para ser compatible con JavaScript y facilitar la migración gradual de código JavaScript a TypeScript.

Hay varias razones por las cuales los objetos pueden parecer no estar completamente tipados:

Duck Typing: TypeScript utiliza un sistema de tipado estructural, también conocido como "duck typing". Esto significa que la compatibilidad de tipos no se basa en la identidad del tipo, sino en la forma de la estructura. Dos objetos son considerados del mismo tipo si tienen la misma estructura, independientemente de si comparten un nombre de tipo. Esto puede llevar a situaciones en las que dos objetos con estructuras similares pero sin un tipo explícito compartido se consideran compatibles.

Propiedades Dinámicas: En TypeScript, puedes agregar propiedades dinámicamente a los objetos sin declararlas previamente. Esto puede dar la impresión de que los objetos no están tipados cuando, de hecho, están permitiendo flexibilidad.

Any Type: Si no se especifica un tipo para un objeto o si se utiliza el tipo any, TypeScript trata ese objeto como de tipo dinámico, lo que significa que no se impondrán restricciones de tipo. El uso frecuente de any puede conducir a la pérdida de la ventaja de tener un sistema de tipos fuerte.

Migración de Código JavaScript: TypeScript se diseñó para ser compatible con JavaScript existente, y parte de esa compatibilidad significa que los objetos JavaScript sin tipos explícitos pueden ser tratados como any en TypeScript.

Aunque TypeScript proporciona flexibilidad, es fundamental utilizar tipos siempre que sea posible para aprovechar al máximo las ventajas del sistema de tipos estáticos y reducir la probabilidad de errores en tiempo de ejecución. Al tipar adecuadamente los objetos, se obtiene un código más robusto, mantenible y menos propenso a errores. */ 
