

//ejercicio 1

function ejercicio1(numbs,resultado){
numbs = [0, 2, 4, 8];
resultado = '';

for (let i = 0; i < numbs.length; i++) {
    for (let j = 0; j < numbs.length; j++) {
        resultado += numbs[i] + '' + numbs[j] + ' ';
    }
}

return alert(resultado);
}

ejercicio1();



//ejercicio2

function ejercicio2(numbs,resultado){
  numbs = [0, 2, 4, 8];
  resultado = '';

  for (let i = 0; i < numbs.length; i++) {
    for (let j = i + 1; j < numbs.length; j++) {
        resultado += numbs[i] + '' + numbs[j] + ' ';
    }
}

return alert(resultado);
}

ejercicio2();
