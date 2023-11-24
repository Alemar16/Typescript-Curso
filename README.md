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