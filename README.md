# Proyecto - Tierra y Mesa

Web de inspiración para escapadas rurales centradas en gastronomía, vino y turismo local, desarrollada como ejercicio de maquetación y funcionalidad **responsive**.

## Tecnologías utilizadas

- **Vite 7.0.4** como entorno de desarrollo y compilación.
- **SASS 1.89.2** con sintaxis SCSS para los estilos.
- **JavaScript modular** para la lógica y la generación de componentes.

## Maquetación

La maquetación ha sido realizada de manera adaptable partiendo del móvil **responsive mobile first**, basado en 4 puntos de corte:

- **mobile**: desde 390 px
- **tablet**: desde 744 px
- **laptop**: desde 1023 px
- **desktop**: desde 1440 px

Se ha procurado que el contenido sea funcional y legible también **por debajo de 390 px y por encima de 1440 px**.

### CSS

Para el código **CSS** se ha utilizado SASS con la sintáxis SCSS.

La organización de los ficheros se ha hecho con **ITCSS** pensando en la escalabilidad y la mantenibilidad.

La metodología utilizada para los componentes CSS ha sido **BEM**, con algunos estilos extra para los estados (state hooks) en aquellos componentes que lo han requerido.

### HTML

Se ha utilizado un solo fichero **HTML** en el que se ha definido el esqueleto de la página, y a partir de ahí se ha ido inyectando el contenido desde componentes JavaScript.

### Fuentes

Se ha descargado de **Google Fonts** la versión de grosor variable de la fuente Sora, para trabajar con ella de forma local.

### Iconos

Sprite **SVG** único para optimizar la carga y permitir estilizar dimensiones y colores.

## JavaScript

Se han separado los componentes **JavaScript** en ficheros diferentes en los que está tanto su código HTML como su funcionalidad.

Se ha considerado necesario alojar algunos datos en un fichero separado (data.js) para evitar utilizar ficheros demasiado extensos.

## Accesibilidad

HTML semántico y uso correcto de roles y atributos ARIA.

`aria-hidden` en SVG decorativos.

Gestión de `aria-expanded` en elementos interactivos.

`aria-label` en elementos sin texto visible y `alt` en imágenes.

## Instalación y arranque del proyecto

```bash
npm install      # Instalar dependencias
npm run dev      # Ejecutar en entorno local (http://localhost:5173)
npm run build    # Generar versión optimizada en /dist
```

## Notas

Este proyecto se basa en la estructura conceptual de una prueba técnica previa realizada para un tercero, pero todo el código ha sido reescrito y adaptado para uso propio.

No se han utilizado fuentes, logotipos, iconos, imágenes, colores, ni temática del original.

El diseño, los contenidos y la implementación actual son íntegramente obra propia.
