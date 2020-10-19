const inicializa = llave => {

  const vector = [];
  let indiceCaracterLlave = 0;

  for( let i = 0; i <= 255; i++){

    if(indiceCaracterLlave == llave.length){
      indiceCaracterLlave = 0;
    }
    vector.push( llave.charAt(indiceCaracterLlave++) );
  }

  return vector;
}


module.exports = inicializa;
