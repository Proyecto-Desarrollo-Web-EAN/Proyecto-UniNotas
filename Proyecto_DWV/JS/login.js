document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Enviando datos de login...");

    fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta de la API:", data);

            if (data.token) {
                localStorage.setItem("token", data.token);
                alert("Inicio de sesión exitoso");
                window.location.href = "subir.html";
            } else {
                alert("Credenciales incorrectas");
            }
        })
        .catch(error => {
            console.error("Error de conexión:", error);
            alert("No se pudo conectar con el servidor.");
        });
});
