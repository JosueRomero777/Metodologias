"use strict";


// ejercicio2
// Escribir una función que reciba como parámetro una frase. 
// Separar por palabras y devolver el numero de palabras que 
// tiene la frase:


let phrase = 'La programación web es fundamental para el progreso'

// console.log(array.length)

function delete_phrase(phrase) {

   let none_spaces = phrase.trim();
   let words = none_spaces.split(' ');
   
   let numberofwords = words.length;
   

   return alert (`La frase tiene ${numberofwords} palabras.`)

    
    

}

 delete_phrase(phrase)


