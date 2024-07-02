"use strict";



// ejercicio5

// Array de objetos con la información de las asignaturas
let asignaturas = [
  { nombre: "MATEMATICA COMPUTACIONAL", nivel: 1 },
  { nombre: "METODOLOGÍAS PARA RESOLVER PROBLEMAS INFORMÁTICOS", nivel: 2 },
  { nombre: "BASE DE DATOS RELACIONALES", nivel: 1 },
  { nombre: "LAS TICS Y SOPORTE EN HARDWARE", nivel: 2 },
  { nombre: "PROGRAMACIÓN DE INTERFACES GRÁFICAS Y ESTRUCTURA DE DATOS", nivel: 3 },
  { nombre: "PROYECTO INTEGRADOR DE SABERES: CREACIÓN DE APLICACIONES DE ESCRITORIO", nivel: 3 }
];

// Función para filtrar asignaturas por nivel
function filtrarPorNivel(asignaturas, nivel) {
  let asignaturasPorNivel = asignaturas.filter(asignatura => asignatura.nivel === nivel);
  return asignaturasPorNivel;
}

// Ejemplo de uso
let nivelBuscado = 1;
let asignaturasNivel1 = filtrarPorNivel(asignaturas, nivelBuscado);
alert(JSON.stringify(asignaturasNivel1));





