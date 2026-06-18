/* Codigo JavaScript de Validacion de Inicio de Sesión */

function validarLogin(event) {
    // Evita que el formulario recargue la pagina por defecto
    event.preventDefault();

    // Obtener datos ingresados utilizando variables sencillas
    var usuario = document.getElementById('username').value;
    var clave = document.getElementById('password').value;

    // Validacion condicional del usuario administrador
    if (usuario == "admin" && clave == "12345") {
        // Redirecciona a la tienda
        window.location.href = "index.html";
    } else {
        // Mensaje si los datos no coinciden
        alert("Usuario o contraseña incorrectos. (Usa admin y 12345)");
    }
}
