"use strict";


//arrays

//Escribir una función que reciba un array de strings y muestre cada elemento con su posición.

function showposition(str) {

  str.forEach((e, i) => {
      alert(`Posición ${i + 1}: ${e}`);
  });
}

let str = ['Hello', 'world', 'from', 'JS'];

showposition(str);

//Escribir una función que reciba un array de números y devuelva la suma de todos sus elementos.

function calculadora(a) {

  const sum = a.reduce((i, e) => i + e);
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
const result = calculadora(numbers);

alert(`La suma de los números es: ${result}`);


//Escribir una función que reciba un array de números y muestre casa uno de sus elementos multiplicado por 3.

function calculadora2(a) {
  a.forEach(e => {
      alert(e * 3);
  });
}

let numberss = [1, 2, 3, 4, 5];
calculadora2(numberss);



