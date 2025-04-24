// Diccionario con las posiciones activas de los puntos del dado (1 a 6)
const posiciones = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9],
};

// Función para mostrar la cara del dado correspondiente al número
function mostrarDado(id, numero) {
  // Oculta todos los puntos
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`${id}p${i}`).classList.remove('visible');
  }

  // Muestra solo los puntos correspondientes al número
  posiciones[numero].forEach(pos => {
    document.getElementById(`${id}p${pos}`).classList.add('visible');
  });
}

// Función que se ejecuta al pulsar "Lanzar Dados"
function lanzarDados() {
  // Genera dos números aleatorios entre 1 y 6
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  // Muestra la cara de cada dado
  mostrarDado('d1', dado1);
  mostrarDado('d2', dado2);

  // Actualiza el texto con el resultado
  document.getElementById('resultado').textContent =
    `Dado 1: ${dado1} | Dado 2: ${dado2} ➤ Suma: ${dado1 + dado2}`;
}
