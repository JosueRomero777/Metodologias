"use strict";


// ejercicio3
// Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. La función debe recibir el array y devolver únicamente la parte entera del promedio.

function calcularPromedio(arrayCalificaciones) {
    
    let sumaCalificaciones = arrayCalificaciones.reduce((total, calificacion) => total + calificacion, 0);
    let promedio = sumaCalificaciones / arrayCalificaciones.length;
    let promedioParteEntera = Math.floor(promedio);
    return promedioParteEntera;
}

// Ejemplo de uso
let calificaciones = [85.4, 92.33, 78.66, 90.33, 88.44];
let promedioParteEntera = calcularPromedio(calificaciones);
alert(promedioParteEntera);
