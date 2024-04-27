'use strict';

 document.addEventListener('DOMContentLoaded',function(){

  //  home();
  // identificador();
   //identificard();
  // taximetro();
  // taximetromin();
   taximetro_night();
   
 });






 function taximetro_night(){
  
  let pagototal;
  let pago = 0.29;
  let klm;
  let relese;
  let time;
  let tarifa_min;
  const arranque = 0.55;
  
  
  time = confirm("¿La carrera es nocturna?", );
 
 if (time != true) {
    tarifa_min = 1.50;
  }else{
    tarifa_min = 1.75;
  }
  

  klm = prompt("Ingrese la distancia recorrida en klm", );

  if (typeof klm === "string" && klm.length !== 0) {
  
  pagototal = (klm * pago) + arranque;
  console.log(pagototal);
  
  
  if ( pagototal < 1.50) {
    alert(
      "El pago total es de " + tarifa_min + " dolares"
    );

  }else if(pagototal < 1.75){
    alert(
      "El pago total es de " + tarifa_min + " dolares"
    );

  }else{
    alert("El pago total es de " + pagototal + " dolares")
  }
  


  }else{
    alert("NO HAS INGRESADO NINGUN VALOR");
    relese = confirm("Deseas repetir el proceso");
  
    if (relese == true) {
      taximetro_night();
    }
  }
  }




// fin del taximetro nocturno







 function identificard(){
  
  let card;
  const pin = "2005";
  let relese;
  
  card = prompt("Ingrese el pin de su tarjeta", );
  
  
  if (typeof card === "string" && card.length !== 0) {
  
  
  if (card.length === 4 && card === pin) {
    alert(
      "tu pin es correcto"
    );
    
  }else{
    alert(
      "tu pin es incorrecto"
    );
  }
  
  
  
  
    }
  else{
    alert("NO HAS INGRESADO NINGUN PIN");
    relese = confirm("Deseas repetir el proceso");
  
    if (relese == true) {
      identificard();
    }
  }
  }








//fin del indentificador de tarjeta









 function home(){
  const mensaje = "Hello World";
  let nombre;
  let edad;
  let altura;
  let cumple;

  // alert(mensaje);
 nombre = prompt("Ingrese su nombre", );
 edad = prompt("Ingrese su edad", );
 altura = prompt("Ingrese su altura", );
 cumple = prompt("Ingrese su cumpleaños", );

 const datos = new Object();
 datos.nombre = nombre;
 datos.edad = edad;
 datos.altura = altura;
 datos.cumple = cumple;

//   variable let
// josue

// let menssaje2;

// menssaje2 = "Variable mutable"

setTimeout(()=> {console.log(datos); }, 10000);

setTimeout(()=> { 

  const container = document.querySelector(".container");

  const parrafo = document.createElement("p");
  parrafo.innerHTML=(nombre);
  container.appendChild(parrafo);

}, 5000);

   }



function identificador(){
  
let number;
let relese;

number = prompt("Ingrese su numero", );


if (typeof number === "string" && number.length !== 0) {


if (number > 0) {
  alert(
    "tu numero es positivo"
  );
  
}else{
  alert(
    "tu numero es negativo"
  );
}




  }
else{
  alert("NO HAS INGRESADO NINGUN NUMERO");
  relese = confirm("Deseas repetir el identificador");

  if (relese == true) {
    identificador();
  }
}
}





  




function taximetro(){
  
  let pagototal;
  let pago = 0.25;
  let klm;
  let relese;
  
  klm = prompt("Ingrese la distancia recorrida en klm", );
  
  
  if (typeof klm === "string" && klm.length !== 0) {
  
  pagototal = (klm * pago) + 0.55;
  
    alert(
      "El pago total es de " + pagototal + " dolares"
    );
    

  }else{
    alert("NO HAS INGRESADO NINGUN VALOR");
    relese = confirm("Deseas repetir el proceso");
  
    if (relese == true) {
      taximetro();
    }
  }
  }


  function taximetromin(){
  
    let pagototal;
    let pago = 0.25;
    let klm;
    let relese;
    
    klm = prompt("Ingrese la distancia recorrida en klm", );
    
    
    if (typeof klm === "string" && klm.length !== 0) {
    
    pagototal = (klm * pago) + 0.55;
    console.log(pagototal);
    
    if (pagototal < 1.50) {
      alert(
        "El pago total es de $1,50 dolares"
      );
    }else{
      alert("El pago total es de " + pagototal + " dolares")
    }
    
 
  
    }else{
      alert("NO HAS INGRESADO NINGUN VALOR");
      relese = confirm("Deseas repetir el proceso");
    
      if (relese == true) {
        taximetromin();
      }
    }
    }
  
  