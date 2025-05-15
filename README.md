<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Subir Recurso | UniNotas</title>
  <link rel="stylesheet" href="/CSS/subirarchivos.css" />
</head>
<body>
  <header>
    <div class="container">
      <h1>UniNotas</h1>
      <nav>
        <a href="index.html">Inicio</a>
        <a href="explorar.html">Explorar</a>
        <a href="subir.html" class="active">Subir</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <h2>Sube tus apuntes</h2>
    <form class="form">
      <input type="text" placeholder="Título del documento" required />
      <input type="text" placeholder="Carrera" required />
      <input type="text" placeholder="Asignatura" required />
      <input type="file" required />
      <button type="submit">Subir</button>
    </form>
  </main>

</body>
</html>
