<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
        <form id="loginForm">
        <input type="email" id="email" placeholder="Correo" required />
        <input type="password" id="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar sesión</button>
    </form>


</body>
<script>
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
</script>

</html>