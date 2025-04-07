// aqui mostramos donde queremos mostrar la tecla que en este caso seria en la caja
const caja = document.getElementById("letra");

// cuando se presiones una tecla se realiza este evento 
document.addEventListener("keydown", function(event) {
  const tecla = event.key;
  
// si al pulsar la tecla se ve que es una letra
  if (/^[a-zA-Z]$/.test(tecla)) {
    caja.textContent = tecla.toUpperCase(); // este metodo la convierte a letra mayusucula
  } else {
    caja.textContent = ""; // No mostrar nada si no es una letra
  }
});

//la funcion keyup se usa cuando se suelta la tecla, el cuadrado se limpia
document.addEventListener("keyup", function() {
  caja.textContent = "";
});
