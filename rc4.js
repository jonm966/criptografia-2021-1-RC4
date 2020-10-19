// Autor: Jonas Montoya
// Fecha: 18/10/20
// Descripción: Algoritmo RC4

const readline = require('readline');
const cifrar = require('./cifrado');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

r1.on('line', line => controlador(line));

const algoritmo = {
  llave: '',
  ejecutar: function(mensaje){
    cifrar( this.llave, mensaje );
    this.llave = '';
  }
}

const controlador = linea => {
  if( !algoritmo.llave ) //Si aun no se ha asignado una llave
    algoritmo.llave = linea;
  else
    algoritmo.ejecutar(linea);
}
