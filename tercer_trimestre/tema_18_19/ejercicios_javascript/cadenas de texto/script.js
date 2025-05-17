function procesarTexto() {
  const texto = document.getElementById('texto').value;
  const resultado = document.getElementById('resultado');

  const mayus = texto.toUpperCase();
  const minus = texto.toLowerCase();
  const capitalizado = texto.split(' ')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(' ');

  resultado.innerHTML = `
    <strong>Texto original:</strong> ${texto}<br>
    <strong>Longitud:</strong> ${texto.length}<br>
    <strong>Número de palabras:</strong> ${texto.trim().split(/\s+/).length}<br>
    <strong>Mayúsculas:</strong> ${mayus}<br>
    <strong>Minúsculas:</strong> ${minus}<br>
    <strong>Capitalizado:</strong> ${capitalizado}<br>
    <strong>Primer carácter:</strong> ${texto.charAt(0)}<br>
    <strong>Último carácter:</strong> ${texto.charAt(texto.length - 1)}<br>
    <strong>Concatenado con " JS":</strong> ${texto + " JS"}<br>
    <strong>Contiene "a":</strong> ${texto.includes('a') ? 'Sí' : 'No'}<br>
    <strong>Reemplazar "a" por "@":</strong> ${texto.replace(/a/g, '@')}<br>
    <strong>Subcadena (0-6):</strong> ${texto.substring(0, 6)}<br>
  `;
}
