"use strict";


// ejercicio3
// Escribir una función que reciba como parámetro una frase, separar por 
// palabras y devolver en un array las palabras que tengan mas de 3 letras.


let phrase = 'You all be the saddest part of me, a part of me that will never be mine';


function arr_phrase(phrase) {
    let words = phrase.split(' ');
    let wordsplusthree = words.filter(words => words.length > 3);
    return alert(wordsplusthree)
}


 arr_phrase(phrase)


