"use strict";


// ejercicio1

function filtrarYRedondear(arr) {
    let valoresFiltrados = arr.filter(valor => valor > 10.00);
    let valoresRedondeados = valoresFiltrados.map(valor => valor.toFixed(2));
    return valoresRedondeados;
}

// Ejemplo de uso
let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];
let valoresFiltradosYRedondeados = filtrarYRedondear(nums);
alert(valoresFiltradosYRedondeados);
