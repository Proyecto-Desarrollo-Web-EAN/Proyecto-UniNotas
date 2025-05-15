document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-subida");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío real

        // Mostrar alerta de confirmación
        alert("¡Tu recurso ha sido enviado con éxito!");

        // Limpia el formulario
        formulario.reset();
    });
});