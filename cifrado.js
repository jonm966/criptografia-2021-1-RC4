const initVectorS = require('./vectorS');
const initVectorT = require('./vectorT');

const cifrar = (llave, mensaje) => {

  const vectorS = initVectorS();
  const vectorT = initVectorT(llave);

  //KSA

  let j = 0;
  for( let i = 0; i <= 255; i++ ){
    /*El método charCodeAt(0) devuelve el entero del caracter correspondiente en ASCII*/
    j = ( j + vectorS[i] + vectorT[i % llave.length].charCodeAt(0) ) % 256;
    intercambio( vectorS, i, j);
  }

  //PRGA

  let keyStream = [];
  let i = 0;
  j = 0;
  for(let k = 0; k < mensaje.length; k++){
    i = ( i + 1 ) % 256;
    j = ( j + vectorS[i] ) % 256;
    intercambio( vectorS, i, j);
    keyStream.push( vectorS[ ( vectorS[i] + vectorS[j] ) % 256 ] );
  }

  let mensajeCifrado = '';
  let valorHex;
  i = 0;
  for (let caracter of mensaje){
    //El método toString(N) regresan el número en base N
    // XOR se representa con '^'
    valorHex = ( caracter.charCodeAt(0) ^ keyStream[i] ).toString(16);
    mensajeCifrado += parseValorHex( valorHex.toUpperCase() );
    i++;
  }

  console.log(mensajeCifrado);
}

/*Hace un intercambio de valores en los índices especificados de un vector*/
const intercambio = ( vector, indice1, indice2 ) => {
  const auxiliar = vector[ indice1 ];
  vector[ indice1 ] = vector[ indice2 ];
  vector[ indice2 ] = auxiliar;
}

/*Agrega un cero para acompletar el hexadecimal de dos dígitos (1 byte) */
const parseValorHex = hex => hex.length == 2 ? hex : '0' + hex;

module.exports = cifrar;
