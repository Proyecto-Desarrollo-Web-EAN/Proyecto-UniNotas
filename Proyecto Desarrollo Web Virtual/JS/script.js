// Ejemplo de cómo podrías cargar dinámicamente las carreras y asignaturas
document.addEventListener('DOMContentLoaded', function() {
    const carreraSelect = document.getElementById('carrera');
    const asignaturaSelect = document.getElementById('asignatura');

    const carrerasEAN = ['Ingeniería de Sistemas', 'Administración de Empresas', 'Contaduría Pública', /* ... */ ];
    const asignaturasEjemplo = ['Matemáticas I', 'Introducción a la Programación', 'Contabilidad Financiera', /* ... */ ];

    carrerasEAN.forEach(carrera => {
        const option = document.createElement('option');
        option.value = carrera;
        option.textContent = carrera;
        carreraSelect.appendChild(option);
    });

    asignaturasEjemplo.forEach(asignatura => {
        const option = document.createElement('option');
        option.value = asignatura;
        option.textContent = asignatura;
        asignaturaSelect.appendChild(option);
    });

    // Aquí podrías agregar la lógica para subir el archivo y mostrar los recursos
    const formularioSubida = document.getElementById('formulario-subida');
    formularioSubida.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se recargue la página
        alert('Recurso subido (simulado)'); // Simula la subida
    });
});