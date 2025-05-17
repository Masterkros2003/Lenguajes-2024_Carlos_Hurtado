const zona = document.getElementById("zona");
const circulo = document.getElementById("circulo");
const registro = document.getElementById("registro");
const limpiarBtn = document.getElementById("limpiar");

// Función para añadir al registro
function logEvento(mensaje, tipo = "") {
  const li = document.createElement("li");
  const hora = new Date().toLocaleTimeString();
  li.textContent = `[${hora}] ${mensaje}`;
  if (tipo === "error") li.style.color = "red";
  if (tipo === "ok") li.style.color = "green";
  registro.appendChild(li);
  registro.scrollTop = registro.scrollHeight;
}

zona.addEventListener("click", () => logEvento("Click en la zona", "ok"));
zona.addEventListener("mousemove", () => logEvento("Movimiento dentro de la zona"));
window.addEventListener("resize", () => logEvento("Ventana redimensionada", "info"));

// Drag & Drop
circulo.addEventListener("dragstart", () => {
  logEvento("Comienza a arrastrarse el círculo", "info");
});

zona.addEventListener("dragover", e => e.preventDefault());

zona.addEventListener("drop", e => {
  e.preventDefault();
  logEvento("¡Círculo soltado DENTRO de la zona!", "ok");
});

document.body.addEventListener("drop", e => {
  if (!zona.contains(e.target)) {
    logEvento("Círculo soltado FUERA de la zona", "error");
  }
});

// Limpiar historial
limpiarBtn.addEventListener("click", () => {
  registro.innerHTML = "";
  logEvento("Historial limpiado");
});

// Evento al cargar
logEvento("La página se ha recargado", "info");
