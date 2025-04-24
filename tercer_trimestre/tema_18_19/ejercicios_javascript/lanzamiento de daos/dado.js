//posicion de los dados cuando se ejecuten
const posiciones = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9],
};

// cara del dado que este activo
function mostrarDado(id, numero) {
  // Oculta todos los puntos
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`${id}p${i}`).classList.remove('visible');
  }

  // muestra los circulos a los que corresponden
  posiciones[numero].forEach(pos => {
    document.getElementById(`${id}p${pos}`).classList.add('visible');
  });
}

// landar los dados
function lanzarDados() {
  // genera dos numeros aleatorios del 1 al 6 en cada dado
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  // muestran los dados 
  mostrarDado('d1', dado1);
  mostrarDado('d2', dado2);

  // resultado de los dados 
  document.getElementById('resultado').textContent =
    `El resultado de la suma de los dados es: ${dado1 + dado2}`;
}
