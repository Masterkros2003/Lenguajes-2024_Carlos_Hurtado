const posiciones = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9],
};

function mostrarDado(id, numero) {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`${id}p${i}`).classList.remove('visible');
  }
  posiciones[numero].forEach(pos => {
    document.getElementById(`${id}p${pos}`).classList.add('visible');
  });
}

function lanzarDados() {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  mostrarDado('d1', dado1);
  mostrarDado('d2', dado2);

  document.getElementById('resultado').textContent = `La Suma de los Dados es : ${dado1 + dado2}`;
}
