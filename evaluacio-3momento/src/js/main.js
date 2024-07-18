"use strict";


// ejercicio1
// Escribir una función que reciba dos parametros que devuelva un array con cada 
//numero multiplicado por un numero. let nums = [1,2,3,4,5]


let nums= [1,2,3,4,5];
let number = 5;

function calculator(arr, number) {
let result = arr.map(e => e * number);
return alert(`El resultado es ${result}`)
    

    

}

calculator(nums, number)


