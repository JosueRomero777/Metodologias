"use strict";


// ejercicio1
// Escribir una función que reciba como parámetros un array de 
// nombres y un nombre a buscar, muestre en pantalla si el nombre 
// esta en lista o no.


let array= ['Josue', 'Antonio', 'Romero', 'Ramon' ]

// console.log(array.length)

function search_name(arr, name) {

    

        if (arr.includes(name)) {
            alert('el nombre se encuentra en la lista')
        } else {
            alert('el nombre no se encuentra en la lista')
        }
    

}

 search_name(array, 'Josue')


