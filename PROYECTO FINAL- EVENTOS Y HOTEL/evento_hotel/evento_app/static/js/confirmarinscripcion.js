function confirmar(mensaje) {
    return confirm(mensaje);
}

function confirmarInscripcion() {
    // Limpiar mensajes de error anteriores
    resetMensajesError();

    // Verificar que todos los campos estén llenos
    var nombre = document.getElementById('id_nombre').value;
    var apellido = document.getElementById('id_apellido').value;
    var tel_part = document.getElementById('id_tel_part').value;
    var lugar_procedencia = document.getElementById('id_lugar_procedencia').value;
    var fecha_llegada = document.getElementById('id_fecha_llegada').value;

    if (nombre.trim() === '') {
        mostrarError('nombre', 'Por favor, completa el campo "Nombre".');
        return;
    }
    if (apellido.trim() === '') {
        mostrarError('apellido', 'Por favor, completa el campo "Apellido".');
        return;
    }

    if (tel_part.trim() === '') {
        mostrarError('tel_part', 'Por favor, completa el campo "Teléfono".');
        return;
    }

    if (lugar_procedencia.trim() === '') {
        mostrarError('lugar_procedencia', 'Por favor, completa el campo "Lugar de Procedencia".');
        return;
    }

    if (fecha_llegada.trim() === '') {
        mostrarError('fecha_llegada', 'Por favor, completa el campo "Fecha de Llegada".');
        return;
    }

    if (confirmar('¿Estás seguro de que quieres inscribirte?')) {
        // Enviar el formulario de forma asíncrona
        enviarFormularioAsync();
    }
}

function mostrarError(campo, mensaje) {
    // Mostrar mensaje de error cerca del campo
    var errorElement = document.getElementById('error_' + campo);
    errorElement.innerText = mensaje;
    errorElement.style.display = 'block';
}

function resetMensajesError() {
    // Ocultar todos los mensajes de error al iniciar la verificación
    var mensajesError = document.querySelectorAll('[id^="error_"]');
    mensajesError.forEach(function (element) {
        element.innerText = '';
        element.style.display = 'none';
    });
}

function enviarFormularioAsync() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', document.getElementById('inscripcionForm').action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Mostrar el mensaje de aviso
            var mensajeAviso = document.getElementById('mensajeAviso');
            mensajeAviso.style.display = 'block';

            // Agregar un evento para detectar el cierre del mensaje
            mensajeAviso.addEventListener('click', function () {
                // Limpiar campos y volver atrás al cerrar el mensaje
                limpiarCamposFormulario();
                volverAtras();
            });
        }
    };

    // Obtener los datos del formulario
    var formData = new FormData(document.getElementById('inscripcionForm'));

    // Enviar el formulario
    xhr.send(new URLSearchParams(formData));
}

function limpiarCamposFormulario() {
    // Obtener todos los campos del formulario
    var camposFormulario = document.querySelectorAll('#inscripcionForm input[type="text"], #inscripcionForm input[type="date"]');

    // Limpiar el valor de cada campo
    camposFormulario.forEach(function (campo) {
        campo.value = '';
    });
}

function volverAtras() {
    // Volver a la página anterior
    window.history.back();
}
