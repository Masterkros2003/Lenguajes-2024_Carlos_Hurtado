const padre = document.getElementById('padre');
const hijo1 = document.getElementById('hijo1');
const hijo2 = document.getElementById('hijo2');
const enlace = document.getElementById('enlace');
const botonToggle = document.getElementById('botonToggle');
const log = document.getElementById('log');

let enlaceActivo = true;

// hacer click en el boton padre
padre.addEventListener('click', () => {
  log.textContent = "Clic en PADRE";
  console.log("Clic en PADRE");
});

// Hijo 1: detiene la propagación del evento al padre
hijo1.addEventListener('click', (e) => {
  e.stopPropagation();
  log.textContent = "Clic en HIJO 1 (con stopPropagation)";
  console.log("Clic en HIJO 1 (con stopPropagation)");
});

// Hijo 2: permite que el evento suba hasta el padre
hijo2.addEventListener('click', () => {
  log.textContent = "Clic en HIJO 2 (sin stopPropagation)";
  console.log("Clic en HIJO 2 (sin stopPropagation)");
});

// Enlace: bloquea el acceso si está desactivado
enlace.addEventListener('click', function(e) {
  if (!enlaceActivo) {
    e.preventDefault();
    log.textContent = "Enlace desactivado con preventDefault()";
    console.log("preventDefault aplicado al enlace");
  }
});

// Botón que activa o desactiva el enlace
botonToggle.addEventListener('click', () => {
  enlaceActivo = !enlaceActivo;
  botonToggle.textContent = enlaceActivo ? "Desactivar Enlace" : "Activar Enlace";
  log.textContent = `Enlace ${enlaceActivo ? "activado" : "desactivado"}`;
});
