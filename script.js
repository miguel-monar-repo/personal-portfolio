const btnEnviar = document.querySelector("#btnEnviar");
const campoMensaje = document.querySelector("#MensajeSubmit");

btnEnviar.addEventListener('click', function(event) {
    event.preventDefault(); // Evita recargar la página
    
    let datos = capturarDatos();
    
    if (datos) {
        console.log('✅ Datos válidos:', datos);
        mostrarMensaje(datos);
    } else {
        console.log('❌ Formulario incompleto');
    }
});

function capturarDatos() {
    const valorNombre = document.querySelector("#Nombre").value.trim();
    const valorEmail = document.querySelector("#Email").value.trim();
    const valorMensaje = document.querySelector("#Mensaje").value.trim();

    // Validar que todos tengan contenido
    if (valorNombre === "" || valorEmail === "" || valorMensaje === "") {
        return null; // Retorna null si hay error
    }

    // Si todo está bien, retorna un objeto con los datos
    return {
        nombre: valorNombre,
        email: valorEmail,
        mensaje: valorMensaje
    };
}

function mostrarMensaje(datos) {
    alert(`✅ ¡Gracias ${datos.nombre}! Tu mensaje ha sido enviado`);
    document.querySelector('form').reset(); // Limpia el formulario

    campoMensaje.textContent = `💬 Gracias por visitar mi web ${datos.nombre}, te estaré respondiendo lo antes posible a tu correo ${datos.email} 😀 `
}