# Proyecto Tienda de Cómics - "Comics Universe"

Este proyecto es una propuesta de sitio web comercial desarrollado en HTML, CSS y JavaScript para una tienda de cómics llamada **Comics Universe**. Está diseñado bajo una estructura limpia e intuitiva, ideal para una práctica escolar inicial de desarrollo web (Ejercicio Final del Bloque 1).

---

## 📁 Estructura del Proyecto

El sitio web sigue un esquema de navegación multipágina similar al ejemplo de referencia `blog-viajes`:

```text
tienda-comics/
├── index.html             # Página principal (Panel de control, catálogo, mapa, multimedia, contacto)
├── login.html             # Formulario de inicio de sesión
├── marvel.html            # Catálogo específico de cómics de Marvel
├── manga.html             # Catálogo específico de Manga
├── README.md              # Este archivo explicativo de la práctica
└── assets/
    ├── css/
    │   └── styles.css     # Estilos globales y específicos del sitio (responsivo y personalizado)
    ├── js/
    │   ├── main.js        # Lógica de interacciones generales (carrito, formularios, audio)
    │   └── login.js       # Validación de credenciales de inicio de sesión
    └── img/
        ├── header.jpg     # Imagen de cabecera principal (tienda)
        ├── marvel.jpg     # Imagen representativa para el bloque de Marvel
        ├── manga.jpg      # Imagen representativa para el bloque de Manga
        ├── spiderman.jpg  # Portada de Spider-Man
        ├── civil_war.jpg  # Portada de Civil War
        ├── daredevil.jpg  # Portada de Daredevil
        ├── guantelete.jpg # Portada de Guantelete del Infinito
        ├── one_piece.jpg  # Portada de One Piece
        ├── demon_slayer.jpg # Portada de Demon Slayer
        ├── berserk.jpg    # Portada de Berserk
        └── chainsaw_man.jpg # Portada de Chainsaw Man
```

---

## 📋 Cumplimiento de Requisitos (Pautas de la Práctica)

El sitio ha sido diseñado meticulosamente para cumplir con cada uno de los puntos exigidos en la imagen de instrucciones (**Instrucciones.jpg**):

1. **Archivos básicos**: Contiene el archivo de inicio `index.html`, la hoja de estilos `styles.css` y el código de comportamiento en `main.js` (además de los archivos equivalentes al proyecto base).
2. **Barra de navegación (`<nav>`)**: Presente en las cabeceras de todas las páginas de catálogo con enlaces relativos consistentes para navegar entre secciones.
3. **Tabla (`<table>`)**: Ubicada en la página principal (`index.html`) bajo el bloque "Cómics Destacados de la Semana". Contiene filas, celdas encabezadas (`<th>`), celdas de datos (`<td>`) y atributos descriptivos semánticos.
4. **Elemento externo incrustado (`<iframe>`)**: En `index.html` se incluye una sección con un mapa de **Google Maps** apuntando a la sede de UNIR México.
5. **Formulario (`<form>`)**: 
   - En `login.html` para el inicio de sesión.
   - En `index.html` un formulario para suscripción al boletín ("Únete al Club de Cómics") con validación nativa HTML5 (atributos `required`, `type="email"`, etc.).
6. **Elemento multimedia**: Elemento de reproducción nativa `<audio>` en la parte inferior de `marvel.html` con controles activos (`controls`) y música promocional.
7. **Atributos de elementos**: Todos los tags utilizan atributos adecuados (`id`, `class`, `src`, `alt`, `href`, `target`, `allowfullscreen`, etc.) según su naturaleza semántica.
8. **Enlaces vacíos**: El menú de navegación y los bloques de información incluyen enlaces con la ruta vacía `href="#"` para cumplir con las pautas.
9. **Comentarios**: Todos los archivos HTML, CSS y JS contienen comentarios detallados en español explicando la funcionalidad de cada bloque de código.
10. **Herramientas adicionales y eventos**:
    - **Diseño Estilizado**: Uso de CSS limpio con colores temáticos (cian neón y amarillo sobre fondo oscuro), bordes redondeados, flexbox básico para el alineamiento y efectos hover simples con transiciones.
    - **JavaScript Interactivos**:
      - El formulario de inicio de sesión valida las credenciales (`admin` y `12345`) y redirige.
      - Al pulsar "Añadir al carrito" en cualquier cómic, un escuchador de eventos en `main.js` actualiza dinámicamente un contador de carrito en el menú de navegación y muestra una alerta confirmando la acción.
      - El envío del formulario de contacto realiza un `preventDefault()` para simular la carga asíncrona y da la bienvenida al usuario con su nombre de forma interactiva.

---

## 🚀 Cómo Ejecutar el Proyecto

1. Descarga o extrae la carpeta `tienda-comics`.
2. Para probar el flujo completo con autenticación, haz doble clic en `login.html` para abrirlo en tu navegador.
3. Inicia sesión introduciendo las siguientes credenciales de prueba:
   - **Usuario**: `admin`
   - **Contraseña**: `12345`
4. Al pulsar **Ingresar**, serás redirigido a la página principal `index.html`.
5. Desde allí puedes navegar libremente por las pestañas del menú, interactuar con el mapa, escuchar el audio o simular compras añadiendo cómics al carrito.
