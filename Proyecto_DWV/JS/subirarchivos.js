document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-subida");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        
        alert("¡Tu recurso ha sido enviado con éxito!");

        formulario.reset();
    });
});
