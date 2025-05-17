// Inicializar el editor TinyMCE
tinymce.init({
  selector: '#editor',
  height: 300,
  menubar: false
});

// Pasa el contenido del editor al div de salida
function pasarADiv() {
  const contenido = tinymce.get('editor').getContent();
  document.getElementById('salida').innerHTML = contenido;
}

// Genera un PDF del contenido del div
function generarPDF() {
  const contenido = document.getElementById('salida');
  html2pdf()
    .set({
      margin: 10,
      filename: 'contenido.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    })
    .from(contenido)
    .save();
}
