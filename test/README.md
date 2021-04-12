# League of Legends

## Índice

* [1. Contexto](#1-contexto)
* [2. Definición de usuarios](#2-definición-de-usuarios)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Proceso de diseño](#4-proceso-de-diseño)
* [5. Planeación](#5-planeación)
* [6. Mejoras del producto](#6-mejoras-del-producto)
* [7. Hacker edition](#7-Hacker-edition)
* [8. Aprendizajes](#8-aprendizajes)


***

## 1. Contexto

Lol Champions es nuestra propuesta web para que judadorxs de Lol (League of Legends) puedan filtrar/encontrar a su campeón favorito o descubrir uno nuevo.

**Tiempo:** 5 sprints

**Desafio:** Enfrentarnos al reto de inicialmente averiguar qué datos eran los más relevantes para nuestros usuarios y seguido de eso entrar en la etapa de diseño para aterrizar nuestros hallazgos.
Este desafío inicial nos llevó a la primera fase de entender más sobre Lol, nuestro proceso fue realizar un Benchmark del sitio oficial y otras aplicaciones orientadas a gamers.


## 2. Definición de usuarios

El paso a paso para entender nuestro target:

* **Primero:** lo fundamental fue conversar con personas cercanas que sabíamos jugaban juegos de consola y más. Les preguntamos por Lol (algunos lo conocían otros no). Hablando nos fuimos haciendo una idea más clara de las funciones y data en general que era más relevantes para ellxs.

* **Segundo:** Los canales de gamers en YouTube nos facilitó información más puntual acerca de rango de edades y necesidades.

* **Tercero:** Hacer tangible a nuestro usuario

<p align = "center"> <img src="/ImagenesReadme/DefinicionUsuarios.jpg"></p> 
  

## 3. Historias de usuario

* **Historia 1:** Como gamer al entrar a la pagina de LOL quiero leer una breve descripción sobre el juego para saber si es de mi interés

* **Historia 2:** Como gamer quiero ver todos los campeones para conocerlos

* **Historia 3:** Como gamer quiero poder buscar el nombre del campeón para ver su contenido más rápido

* **Historia 4:** Como gamer quiero tener la opción de organizar los nombres de manera ascendente y descendente para ubicar el nombre de un campeón

* **Historia 5:** Como gamer quiero filtrar los campeones por categoría para ver los roles de mi interés

* **Historia 6:** Como gamer quiero ver los campeones por dificultad para encontrar el que se ajuste a mi experiencia

* **Historia 7:** Como gamer quiero ampliar la información por cada campeón para conocer todas sus características


## 4. Proceso de diseño

* Ya con nuestros usuarios identificados y nuestras historias desarrolladas, empezamos a bocetar varias propuestas. Teníamos 2 versiones para la pantalla donde se visualizaban todos los campeones pero gracias a la iteración con usuarios reales nos quedamos con la versión B.

<p align = "center"> <img src="/ImagenesReadme/BocetosDigitales.jpg"></p>

* Después de varias iteraciones, pasamos a tener nuestro prototipo en baja con más detalles para guiarnos y siempre teniendo a la mano nuestras historias de usuario. El prototipo se realizó con la herramienta Figma.

<p align = "center"> <img src="/ImagenesReadme/PrototipoBaja.png"></p>

[Enlace prototipo Figma.](https://www.figma.com/file/cMebARZeoOW9RcPAYjrjwp/League-of--legends?node-id=0%3A1)

* Por último nos quedaba trabajar en el prototipo en alta. El cual le agregamos la parte cromática y se definió botones, tipografía. Tomamos como referencia en cuanto a la paleta de color el sitio oficial de Lol para no romper con el estilo que es muy marcado dentro de la comunidad de Lol.

<p align = "center"> <img src="/ImagenesReadme/PrototipoAlta.jpg"></p>


## 5. Planeación

Fue fundamental apoyarnos con la herramienta **Trello**. Inicialmente montamos todas las historias de usuario y por cada una escribimos los criterios de aceptación juntos con los de terminado. Cada historia la desglosamos en múltiples tareas concretas lo cual nos permitió avanzar de una manera mucho más organizada.

Nuestro tablero de Trello:
<p align = "center"> <img src="/ImagenesReadme/Trello.png"></p>


## 6. Mejoras del producto

* Como pendiente quedaría ampliar la información de cada campeón por medio de una pantalla modal.
* Agregar en la home la función de ampliar el mapa con la información de cada zona.


## 7. Hacker edition

* Se implemento la libreria **Chart.js** para visualizar por medio de una grafica de barras los datos de la estadística del porcentaje de campeones respecto a su nivel de dificultad.
* Coverage 100%
Los resultados obtenidos de testing son:

<p align = "center"> <img src="/ImagenesReadme/CoverageTest.jpg"></p>


## 8. Aprendizajes

### HTML Y CSS

* [ ] Uso de HTML semántico
* [ ] Uso de selectores de CSS
* [ ] Construir la aplicación respetando el diseño realizado (maquetación)
* [ ] Uso de flexbox en CSS 

### DOM y Web APIs

* [ ] Uso de selectores del DOM
* [ ] Manejo de eventos del DOM
* [ ] Manipulación dinámica del DOM. (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules (import | export)
* [ ] Diferenciar entre expression y statements
* [ ] Diferenciar entre tipos de datos primitivos y no primitivos

### Testing

* [ ] Testeo unitario

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] lanear y ejecutar tests de usabilidad