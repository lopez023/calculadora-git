function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
  }
  
  function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }

  function limpiar(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = valorPantalla.subtring(0, valorPantalla.length -1);
    document.getElementById('pantalla').value = resultado

  }