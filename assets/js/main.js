/* Codigo JavaScript de tienda de comics */

// Funcion para agregar comics al carrito
function agregarAlCarrito(nombreComic) {
    alert("¡Se ha añadido \"" + nombreComic + "\" al carrito de compras!");
}

// Funcion que se activa cuando enviamos el formulario de contacto/suscripción
function enviarSuscripcion(event) {
    event.preventDefault();

    // Obtenemos los valores de los cuadros de texto 
    var nombre = document.getElementById('contactName').value;
    var email = document.getElementById('contactEmail').value;

    alert("¡Gracias " + nombre + "! Te has suscrito exitosamente al boletín con el correo: " + email);
    document.getElementById('contactForm').reset();
}
