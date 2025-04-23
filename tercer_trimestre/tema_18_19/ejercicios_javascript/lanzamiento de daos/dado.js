let puntajeAcumulado = 0;

function lanzarDado() {
  // Genera un número aleatorio entre 1 y 6
  return Math.floor(Math.random() * 6) + 1;
}

document.getElementById('lanzar').addEventListener('click', () => {
  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  document.getElementById('dado1').textContent = dado1;
  document.getElementById('dado2').textContent = dado2;

  const suma = dado1 + dado2;
  puntajeAcumulado += suma;
  document.getElementById('resultado').textContent = `Sacaste un ${dado1} y un ${dado2}. Suma: ${suma}`;
  document.getElementById('puntajeTotal').textContent = `Puntaje total: ${puntajeAcumulado}`;
});
