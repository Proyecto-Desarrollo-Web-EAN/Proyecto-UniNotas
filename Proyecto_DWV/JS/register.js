document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem("token", data.token);
                alert("Registro exitoso");
                window.location.href = "subir.html"; // o dashboard
            } else {
                alert("Error en el registro");
                console.log(data);
            }
        })
        .catch(error => {
            console.error("Error de conexión:", error);
        });
});
