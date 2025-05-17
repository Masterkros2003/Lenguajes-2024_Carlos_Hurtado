// Seleccionamos todos los <div> con la clase "caja"
const divs = document.querySelectorAll('.caja');

// Inicializamos contadores
let conContenido = 0;
let vacios = 0;

// Recorremos todos los divs encontrados
divs.forEach(div => {
  // Verificamos si tienen contenido (ignorando espacios en blanco)
  if (div.textContent.trim() !== "") {
    conContenido++; // Si tiene texto, sumamos a los que tienen contenido
  } else {
    vacios++; // Si está vacío, sumamos a vacíos
  }
});

// Mostramos los resultados en pantalla
document.getElementById('total').textContent = divs.length;
document.getElementById('conContenido').textContent = conContenido;
document.getElementById('vacios').textContent = vacios;
