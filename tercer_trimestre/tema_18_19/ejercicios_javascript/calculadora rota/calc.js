let resultado = document.getElementById("resultado");

function agregarNumero(num) {
  resultado.value += num;
}

function limpiar() {
  resultado.value = "";
}

function borrar() {
  resultado.value = resultado.value.slice(0, -1);
}

function operar(op) {
  if (op === 'raiz') {
    try {
      resultado.value = Math.sqrt(eval(resultado.value));
    } catch {
      resultado.value = "Error";
    }
  } else {
    resultado.value += op;
  }
}

function calcular() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    resultado.value = "Error";
  }
}

function inverso() {
  try {
    resultado.value = 1 / eval(resultado.value);
  } catch {
    resultado.value = "Error";
  }
}


function cuadrado() {
  try {
    let val = eval(resultado.value);
    resultado.value = val * val;
  } catch {
    resultado.value = "Error";
  }
}

function aBinario() {
  try {
    resultado.value = parseInt(eval(resultado.value)).toString(2);
  } catch {
    resultado.value = "Error";
  }
}

function aHex() {
  try {
    resultado.value = parseInt(eval(resultado.value)).toString(16).toUpperCase();
  } catch {
    resultado.value = "Error";
  }
}