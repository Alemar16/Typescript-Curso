# TypeScript

TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft. Es un superset de JavaScript, lo que significa que cualquier programa JavaScript válido también es un programa TypeScript, pero TypeScript agrega características adicionales a JavaScript.

## Características Clave

1. **Tipado estático:** TypeScript permite definir tipos de datos para variables, parámetros de función y otros elementos, lo que ayuda a atrapar errores en tiempo de compilación en lugar de en tiempo de ejecución.

2. **Interfaces:** TypeScript introduce el concepto de interfaces, que permiten definir contratos para estructuras de datos y clases.

3. **Clases:** TypeScript soporta programación orientada a objetos con la declaración de clases, herencia y encapsulamiento.

4. **Módulos:** TypeScript proporciona un sistema de módulos para organizar y reutilizar código de manera eficiente.

5. **Compilación:** Aunque TypeScript agrega características adicionales, el código fuente TypeScript se compila a JavaScript estándar, lo que significa que se puede ejecutar en cualquier entorno que admita JavaScript.

6. **Mejoras de ES6 y posterior:** TypeScript incluye todas las características de ECMAScript 6 (también conocido como ES2015) y versiones posteriores, lo que permite a los desarrolladores utilizar las últimas funcionalidades de JavaScript.

## Beneficios Principales

El principal beneficio de TypeScript es mejorar la calidad y mantenibilidad del código al agregar tipado estático y otras características de lenguajes de programación más avanzados, sin perder la compatibilidad con JavaScript. Esto lo hace especialmente útil para proyectos grandes y complejos, donde la detección temprana de errores y el soporte para herramientas de desarrollo más avanzadas pueden ser críticos.



# Instalación de TypeScript en Windows

## 1. Instalar Node.js y npm
Descarga e instala Node.js desde el [sitio oficial](https://nodejs.org/), que incluye npm.

## 2. Instalar TypeScript globalmente
Abre tu terminal (PowerShell o línea de comandos) y ejecuta el siguiente comando para instalar TypeScript globalmente:

```bash
npm install -g typescript
```

## 3. Verificación la instalación
Verifica que TypeScript se haya instalado correctamente con los siguientes comandos:

```bash
tsc --version
```
## 4. Crear un Archivo TypeScript
Crea un archivo con extensión .ts (por ejemplo, app.ts) y escribe un código TypeScript básico.

```bash
// script.ts
console.log("Hola Mundo en TypeScript")
```
## 5. Compilar el archivo TypeScript
En la terminal, navega al directorio que contiene tu archivo TypeScript y ejecuta el siguiente comando para compilarlo a JavaScript:

```bash
tsc script.ts
```
Esto generará un archivo app.js en el repositorio.

# Modo observador
Este modo observa los archivos TypeScript y automáticamente recompila el código cuando detecta cambios.

Para usar el modo observador, puedes abrir tu terminal y navegar al directorio que contiene tu archivo TypeScript (script.ts). Luego, ejecuta el siguiente comando:

```bash
tsc script.ts -w
```

Después de ejecutar este comando, el compilador de TypeScript estará observando el archivo script.ts y cualquier cambio que realices en este archivo provocará una recompilación automática.

Este modo es útil durante el desarrollo, ya que te permite ver rápidamente los efectos de tus cambios sin tener que ejecutar manualmente el compilador cada vez que haces una modificación en tu código.

Sin embargo cuando tienes que crear o usar varios archivos .ts en tu proyecto seria conveniente crear un archivo tsconfig.json y ajustar las preferencias para elproyecto, no obstante tambien existe uno opcion mas idonea y de control total como "iniciar un proyecto cono Typescript":

```bash
tsc init
```

# Iniciar Proyecto TypeScript
El comando `tsc init` (o `tsc --init`) se utiliza para inicializar un proyecto TypeScript creando un archivo de configuración `tsconfig.json`. Este archivo de configuración permite personalizar cómo TypeScript compila tus archivos. Al ejecutar `tsc init`, TypeScript intentará generar un archivo `tsconfig.json` basado en algunas opciones predeterminadas y la estructura de tu proyecto.

Cuando ejecutas `tsc init`, sucede lo siguiente:

- **Creación del archivo `tsconfig.json`:** Se genera un archivo `tsconfig.json` en el directorio actual (o en el directorio especificado si proporcionas una ruta).

- **Configuración inicial:** El archivo `tsconfig.json` contendrá algunas opciones de configuración predeterminadas para empezar. Estas opciones pueden incluir cosas como la versión de ECMAScript a la que se compilará, la ubicación de los archivos fuente y el directorio de salida.

- **Comentarios informativos:** El archivo generado contiene comentarios informativos en cada opción para que puedas entender su propósito y ajustarlos según tus necesidades.

esto es lo que muestra la terminal despues de ejecutar el comando:

```bash
Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

Puedes verificar la documentacion segun el [enlace](https://aka.ms/tsconfig) que aparece en la terminal


Después de ejecutar `tsc init`, puedes abrir el archivo `tsconfig.json` y modificar las opciones según tus necesidades específicas. Esto te permite personalizar cómo TypeScript compila tus archivos en función de la estructura y requisitos de tu proyecto.
