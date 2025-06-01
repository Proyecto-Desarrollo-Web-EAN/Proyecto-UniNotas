function buscarLibros(query) {
    const resultados = document.getElementById("resultados-libros");

    if (query.length < 3) {
        resultados.innerHTML = "<p>Escribe al menos 3 caracteres para ver sugerencias de libros.</p>";
        return;
    }

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            resultados.innerHTML = "";

            if (!data.items || data.items.length === 0) {
                resultados.innerHTML = "<p>No se encontraron libros relacionados.</p>";
                return;
            }

            data.items.slice(0, 5).forEach(book => {
                const info = book.volumeInfo;

                resultados.innerHTML += `
                    <div class="libro">
                        <h4>${info.title || "Sin título"}</h4>
                        <p><strong>Autor(es):</strong> ${info.authors ? info.authors.join(", ") : "Desconocido"}</p>
                        <a href="${info.infoLink}" target="_blank">Ver en Google Books</a>
                    </div>
                `;
            });
        })
        .catch(err => {
            resultados.innerHTML = "<p>Error al obtener los libros.</p>";
            console.error(err);
        });
}