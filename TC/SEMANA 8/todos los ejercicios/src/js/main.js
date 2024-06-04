"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // home();
  // identificador();
  //identificard();
  // taximetro();
  // taximetromin();
  // taximetro_night();
  // operadores();
  // ejercicios();
  // evaluacion();
  // bored();
  // bucle();
  //  fn1();
  //  fn2();
  //calculadora2();
  //age();
});

function evaluacion() {
  // En nuestra tienda, ofrecemos a nuestros clientes la conveniencia de utilizar nuestro estacionamiento por USD 2,00.
  // Si su compra supera los USD 20,00, el estacionamiento será gratuito. Para calcular el total de su compra,
  // le pedimos que ingrese el precio unitario del producto y la cantidad que desea adquirir. Mostrar el valor a pagar por el uso del parqueadero.

  let buy;
  let product;
  let result;
  let sms;

  const a = "Por el valor total de su compra el parqueadero es gratuito";
  const b = "El valor a pagar por el parqueadero es de USD 2,00";

  buy = prompt("Ingrese el precio del prodcuto");
  product = prompt("Ingrese la cantidad del prodcuto adquirido");

  result = buy * product;

  sms = result > 20 ? a : b;

  alert(sms);
}

function ejercicios() {
  // 1 ejercicio

  let sms;
  let age;
  const a = "Eres mayor de edad";
  const b = "Eres menor de edad";

  age = prompt("Ingrese su edad");

  sms = age >= 18 ? a : b;

  alert(sms);

  // 2 ejercicio

  let termino1;
  let termino2;
  let result;

  termino1 = prompt("Ingrese el primer numero a comparar");

  termino2 = prompt("Ingrese el segundo numero a comparar");

  result = termino1 > termino2 ? termino1 : termino2;

  alert("El termino " + result + " es mayor");

  // 3 ejercicio

  const p = "Su numero es par";
  const i = "Su numero es impar";

  let resultado;
  let calculadora;

  calculadora = prompt("Ingrese el numero de su preferncia");

  resultado = calculadora % 2 === 0 ? p : i;

  alert(resultado);

  // 4 ejercicio

  const d = "Es divisible por 5";
  const n = "No es divisible por 5";

  let resultado_1;
  let divisible;

  divisible = prompt("Ingrese el numero a determinar si es divisible para 5");

  resultado_1 = divisible % 5 === 0 ? d : n;

  alert(resultado_1);
}

function taximetro_night() {
  let pagototal;
  let pago = 0.29;
  let klm;
  let relese;
  let time;
  let tarifa_min;
  const arranque = 0.55;

  time = confirm("¿La carrera es nocturna?");

  if (time != true) {
    tarifa_min = 1.5;
  } else {
    tarifa_min = 1.75;
  }

  klm = prompt("Ingrese la distancia recorrida en klm");

  if (typeof klm === "string" && klm.length !== 0) {
    pagototal = klm * pago + arranque;
    console.log(pagototal);

    if (pagototal < 1.5) {
      alert("El pago total es de " + tarifa_min + " dolares");
    } else if (pagototal < 1.75) {
      alert("El pago total es de " + tarifa_min + " dolares");
    } else {
      alert("El pago total es de " + pagototal + " dolares");
    }
  } else {
    alert("NO HAS INGRESADO NINGUN VALOR");
    relese = confirm("Deseas repetir el proceso");

    if (relese == true) {
      taximetro_night();
    }
  }
}

// fin del taximetro nocturno

function identificard() {
  let card;
  const pin = "2005";
  let relese;

  card = prompt("Ingrese el pin de su tarjeta");

  if (typeof card === "string" && card.length !== 0) {
    if (card.length === 4 && card === pin) {
      alert("tu pin es correcto");
    } else {
      alert("tu pin es incorrecto");
    }
  } else {
    alert("NO HAS INGRESADO NINGUN PIN");
    relese = confirm("Deseas repetir el proceso");

    if (relese == true) {
      identificard();
    }
  }
}

//fin del indentificador de tarjeta

function home() {
  const mensaje = "Hello World";
  let nombre;
  let edad;
  let altura;
  let cumple;

  // alert(mensaje);
  nombre = prompt("Ingrese su nombre");
  edad = prompt("Ingrese su edad");
  altura = prompt("Ingrese su altura");
  cumple = prompt("Ingrese su cumpleaños");

  const datos = new Object();
  datos.nombre = nombre;
  datos.edad = edad;
  datos.altura = altura;
  datos.cumple = cumple;

  //   variable let
  // josue

  // let menssaje2;

  // menssaje2 = "Variable mutable"

  setTimeout(() => {
    console.log(datos);
  }, 10000);

  setTimeout(() => {
    const container = document.querySelector(".container");

    const parrafo = document.createElement("p");
    parrafo.innerHTML = nombre;
    container.appendChild(parrafo);
  }, 5000);
}

function identificador() {
  let number;
  let relese;

  number = prompt("Ingrese su numero");

  if (typeof number === "string" && number.length !== 0) {
    if (number > 0) {
      alert("tu numero es positivo");
    } else {
      alert("tu numero es negativo");
    }
  } else {
    alert("NO HAS INGRESADO NINGUN NUMERO");
    relese = confirm("Deseas repetir el identificador");

    if (relese == true) {
      identificador();
    }
  }
}

function taximetro() {
  let pagototal;
  let pago = 0.25;
  let klm;
  let relese;

  klm = prompt("Ingrese la distancia recorrida en klm");

  if (typeof klm === "string" && klm.length !== 0) {
    pagototal = klm * pago + 0.55;

    alert("El pago total es de " + pagototal + " dolares");
  } else {
    alert("NO HAS INGRESADO NINGUN VALOR");
    relese = confirm("Deseas repetir el proceso");

    if (relese == true) {
      taximetro();
    }
  }
}

function taximetromin() {
  let pagototal;
  let pago = 0.25;
  let klm;
  let relese;

  klm = prompt("Ingrese la distancia recorrida en klm");

  if (typeof klm === "string" && klm.length !== 0) {
    pagototal = klm * pago + 0.55;
    console.log(pagototal);

    if (pagototal < 1.5) {
      alert("El pago total es de $1,50 dolares");
    } else {
      alert("El pago total es de " + pagototal + " dolares");
    }
  } else {
    alert("NO HAS INGRESADO NINGUN VALOR");
    relese = confirm("Deseas repetir el proceso");

    if (relese == true) {
      taximetromin();
    }
  }
}

//operadores

function operadores() {
  //ternario

  let sms;
  let age;
  const a = "Eres mayor de edad";
  const b = "Eres menor de edad";

  age = prompt("Ingrese su edad");

  sms = age >= 18 ? a : b;

  alert(sms);

  // colecente nulo

  let admin;
  let mensaje;
  let login;

  admin = prompt("Ingrese su credencial");

  mensaje = admin ?? "Ha ingresado como";

  login =
    admin === "user" || admin === "admin"
      ? alert("Bienbenido " + mensaje)
      : alert("NO EXISTEN LAS CREDENCIALES");

  // alert(mensaje + " cuenta de invitado")
}

function bored() {
  let bebida;
  let resultado;
  bebida = prompt("Ingrese el digito del sabor de su bebida");
  resultado = bebida.valueOf(Number);

  console.log(resultado);
  switch ("") {
    case 1:
      alert("tu sabor es manzana");

      break;
    case 2:
      alert("tu sabor es naranja");

      break;
    case 3:
      alert("tu sabor es mandarina");

      break;
    case 4:
      alert("tu sabor es pera");

      break;
    case 5:
      alert("tu sabor es sandia");

      break;

    default:
      alert("tu sabor es agua");
      break;
  }
}

// BUCLES

   function bucle() {

      let a;
      let premio = 3
      let sms = "has sobrepasado el nm de intentos"
      let i = 0;

   do {
  a = prompt("Ingresa tu numero de la suerte", )

     i++;

     if (i == 3) {
      alert(sms)
      return;
     }

   } while (a != premio );
   alert("WIN en el intento nm: " + i)
 }

  function bucle() {

    let a = 0;
    let premio = 3;
    let i = 1;

  for (  i ; i < 4; i++) {

    a = prompt("Ingresa tu numero de la suerte", )

    if(a == premio) {

      alert("WIN en el intento nm: " + i)
      break;

    }else if (i > 2) {
        alert("Has superado el nm de intentos ")

      }else{
        alert('Your Lose, intento nm: ' + i)
      }

  }

}

function fn1() {
  let pin;
  let key = 3;

  do {
    pin = prompt("Ingresa tu clave ");
  } while (pin != key);
  alert("Clave correcta");
}

function fn2(i) {
  let pin;
  i = 3;

  pin = prompt("Ingresa tu clave ");

  while (pin == i) {
    alert("tu clave es correcta");
    break;
  }
}

function fn3() {
  return "Hello world";
}

function fn4(a) {
  return false;
}

function calculadora(age) {
  if (age > 17) {
    return "ERES MAYOR DE EDAD";
  } else {
    return "ERES MENOR DE EDAD";
  }
}

// alert(calculadora(13))

function calculadora2() {
  let i = 0;
  let a = Number(prompt("ingresa el primer termino"));
  let b = Number(prompt("ingresa el segundo termino"));
  let resultado;

  for (let multi = 0; multi == a; multi++) {
    alert(multi);
  }
}

//1 ejercicio de funciones, momento 2

function bored(a, b) {
  return a + b;
}

let sum = function (a, b) {
  return a + b;
};

let sumflecha = (a, b) => a + b;

let age = (a, b) => {
  let ageactual = 2024;
  a = prompt("ingresa tu edad");

  let result = ageactual - a;
  b = "Tu ano de nacimiento es " + result;

  alert(b);
};






function rebored(a) {

  a = prompt("Ingresa tu numero ");
  
  let tabla = "";
  
  for (let i = 1; i <= 10; i++) {
    tabla += `${a} x ${i} = ${a * i}\n`;
  }
  return tabla;

}

// Llamamos a la función con el número deseado

//alert(rebored());


let calcusum = (a, b) =>  {


 
let result =  a + b
  alert('EL resultado es ' + result)

};
let calcurest = (a, b) => {

  
  
  let result =  a - b
  alert('EL resultado es ' + result)

};


// let calculadoraaaa = () => {
// let operacion = Number(prompt('Si tu operacion es suma ingresa el numero 1, si es resta el numero 2'))


// if (operacion == 1) {
//   calcusum()

// } else {
//   calcurest()
// }

// }
let calculadoraaaa = (op, fnsum, fnrest) => {

  let a = Number(prompt('ingresa el primer digito'));
  let b = Number(prompt('ingresa el segundo digito'));

if (op === 'sum') {
  fnsum(a, b)

} 

if (op === 'rest') {
  fnrest(a, b)

} 

}


//calculadoraaaa("sum", calcusum, calcurest)


let labo =  new Object();

 
  labo.pc = 12;
  labo.pizarra = 1;
  labo.proyector = 1;
  labo.ventilador = 2;
  labo.luces = 11;
  labo.color = 'beige';
  labo.ubicacion = 'matriz';


console.log(labo)



let persona =  [


{
'name' : 'josue',
'age' : 13,
'secondname' : 'romero' },

{

'name' : 'antonio',
'age' : 19,
'secondname' : 'ramon' }

]

console.log(persona[1])






