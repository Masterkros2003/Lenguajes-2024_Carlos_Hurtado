//variables para el tiempo y 
let ms = 0, s = 0, m = 0;
// para ver si el tiempo esta corriendo o no
let intervalo = null;

//creamos la funcion actualizar
function actualizar() {
  ms += 10;
  //si se llega a 1000 ms se sumaria un segundo y se reinican
  if (ms === 1000) { ms = 0; s++; }
// si llegamnos a 60 s se reinicia y se añade 1 minuto
  if (s === 60) { s = 0; m++; }

// SE ACTUALIZA EL CONTENIDO DE LA INTERFAZ (DUDA) 
  document.getElementById("milisegundos").textContent = ms.toString().padStart(3, '0');
  document.getElementById("segundos").textContent = s.toString().padStart(2, '0');
  document.getElementById("minutos").textContent = m.toString().padStart(2, '0');
}

function iniciar() {
    //si el intervalono esta en marcha, no se puede inicira, SOLO SE INICIA SI ESTA PARADO
  if (!intervalo) intervalo = setInterval(actualizar, 10);
}

function detener() {
  clearInterval(intervalo);
  //ponemos el intervalo a null apar que se detenga y no corra eltempo
  intervalo = null;
}
//reiniciamos el cronómetro
function reiniciar() {
  detener(); // para paralo
  ms = s = m = 0; //ponemos todas las variables a 0
  actualizar();
}
