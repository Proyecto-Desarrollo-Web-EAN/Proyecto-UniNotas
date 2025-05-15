document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador");
    const recursos = document.querySelectorAll(".card");

    buscador.addEventListener("keyup", function () {
        const texto = buscador.value.toLowerCase();

        recursos.forEach(function (recurso) {
            const contenido = recurso.innerText.toLowerCase();

            if (contenido.includes(texto)) {
                recurso.style.display = "";
            } else {
                recurso.style.display = "none";
            }
        });
    });
});