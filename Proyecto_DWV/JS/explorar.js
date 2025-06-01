document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador");
    const recursos = document.querySelectorAll(".card");

    buscador.addEventListener("keyup", function () {
        const texto = buscador.value.toLowerCase();

        recursos.forEach(function (recurso) {
            const contenido = recurso.innerText.toLowerCase();
            recurso.style.display = contenido.includes(texto) ? "" : "none";
        });

        buscarLibros(texto);
    });
});
