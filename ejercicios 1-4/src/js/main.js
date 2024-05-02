'use strict';

 document.addEventListener('DOMContentLoaded',function(){

  // home();
  // identificador();
   //identificard();
  // taximetro();
  // taximetromin();
  // taximetro_night();
  // operadores();
  ejercicios();
   
 });






   
 
function ejercicios(){

// 1 ejercicio

  let sms;
  let age;
  const a = "Eres mayor de edad";
  const b = "Eres menor de edad";
     
    age = prompt("Ingrese su edad", );
    
    sms = age >= 18  ? a:b;
    
    alert(sms)
  
  
      
// 2 ejercicio
  
  
  
  let termino1;
  let termino2;
  let result;
  
      
      
    termino1 = prompt("Ingrese el primer numero a comparar", );
    
    termino2 = prompt("Ingrese el segundo numero a comparar", );
    
    result = termino1 > termino2  ? termino1:termino2;
    
    alert("El termino " + result + " es mayor")
  
  
  
  
  
  
  
// 3 ejercicio
  
  
  const p = "Su numero es par";
  const i = "Su numero es impar";
     
  let resultado;
  let calculadora;
  
      
      
     
    calculadora = prompt("Ingrese el numero de su preferncia", );
      
    
    resultado = calculadora % 2 === 0 ? p:i;
    
    alert(resultado)
  
    
  
// 4 ejercicio
  
  
  const d = "Es divisible por 5";
  const n = "No es divisible por 5";
     
  let resultado_1;
  let divisible;
  
      
      
     
    divisible = prompt("Ingrese el numero a determinar si es divisible para 5", );
      
    
    resultado_1 = divisible % 5 === 0 ? d:n;
    
    alert(resultado_1)
  
  
  
  
  
  
    
  
  
    }





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
  
  







    //operadores

   

    function operadores(){
     
      //ternario

      let sms;
      let age;
      const a = "Eres mayor de edad";
      const b = "Eres menor de edad";
     
      age = prompt("Ingrese su edad", );
    
      sms = age >= 18  ? a:b;
    
      alert(sms)
  
  

  
      // colecente nulo
  
      let admin;
      let mensaje;
      let login;
     
      admin = prompt("Ingrese su credencial", );
  
      mensaje = admin  ?? "Ha ingresado como";
     
     
      login = admin === 'user' || admin === 'admin' ?
      alert("Bienbenido " + mensaje) :  alert("NO EXISTEN LAS CREDENCIALES");
      
      // alert(mensaje + " cuenta de invitado")
      
     
  
   
    }