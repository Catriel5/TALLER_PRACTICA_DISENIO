

// Función para restablecer los mensajes de error en la pantalla de inicio de sesión
function resetearMensajesDeErrorInicioSesion() {
    var mensajeDeError = document.getElementById("mensaje-error");

    if (mensajeDeError) {
        mensajeDeError.innerText = "";
    }
}

// Llamada a la función de restablecer mensajes de error en la carga de la página
resetearMensajesDeErrorInicioSesion();

// Función para validar el formulario de inicio de sesión
function validarInicioSesion() {
    // Restablecer los mensajes de error
    resetearMensajesDeErrorInicioSesion();

    // Obtener los valores de los campos del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validaciones
    var errores = [];

    if (!username.trim() || !password.trim()) {
        errores.push("Usuario y contraseña son obligatorios.");
        mostrarErrorInicioSesion("mensaje-error", "Usuario y contraseña son obligatorios.");
    }

    // Si hay errores, detener el envío del formulario
    if (errores.length > 0) {
        return false;
    }

    // Si no hay errores, permitir el envío del formulario
    return true;
}

// Función para mostrar mensajes de error en la pantalla de inicio de sesión
function mostrarErrorInicioSesion(id, mensaje) {
    var elementoError = document.getElementById(id);
    if (elementoError) {
        elementoError.innerText = mensaje;
    }
}
