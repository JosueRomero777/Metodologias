"use strict";function evaluacion(){let e,r,t,o;e=prompt("Ingrese el precio del prodcuto"),r=prompt("Ingrese la cantidad del prodcuto adquirido"),t=e*r,o=t>20?"Por el valor total de su compra el parqueadero es gratuito":"El valor a pagar por el parqueadero es de USD 2,00",alert(o)}function ejercicios(){let e,r;let t,o,a;r=prompt("Ingrese su edad"),e=r>=18?"Eres mayor de edad":"Eres menor de edad",alert(e),t=prompt("Ingrese el primer numero a comparar"),o=prompt("Ingrese el segundo numero a comparar"),a=t>o?t:o,alert("El termino "+a+" es mayor");let n,l;l=prompt("Ingrese el numero de su preferncia"),n=l%2==0?"Su numero es par":"Su numero es impar",alert(n);let s,i;i=prompt("Ingrese el numero a determinar si es divisible para 5"),s=i%5==0?"Es divisible por 5":"No es divisible por 5",alert(s)}function taximetro_night(){let e,r,t,o,a;o=confirm("¿La carrera es nocturna?"),a=1!=o?1.5:1.75,r=prompt("Ingrese la distancia recorrida en klm"),"string"==typeof r&&0!==r.length?(e=.29*r+.55,console.log(e),e<1.5||e<1.75?alert("El pago total es de "+a+" dolares"):alert("El pago total es de "+e+" dolares")):(alert("NO HAS INGRESADO NINGUN VALOR"),t=confirm("Deseas repetir el proceso"),1==t&&taximetro_night())}function identificard(){let e;let r;e=prompt("Ingrese el pin de su tarjeta"),"string"==typeof e&&0!==e.length?4===e.length&&"2005"===e?alert("tu pin es correcto"):alert("tu pin es incorrecto"):(alert("NO HAS INGRESADO NINGUN PIN"),r=confirm("Deseas repetir el proceso"),1==r&&identificard())}function home(){let e,r,t,o;e=prompt("Ingrese su nombre"),r=prompt("Ingrese su edad"),t=prompt("Ingrese su altura"),o=prompt("Ingrese su cumpleaños");const a=new Object;a.nombre=e,a.edad=r,a.altura=t,a.cumple=o,setTimeout(()=>{console.log(a)},1e4),setTimeout(()=>{const r=document.querySelector(".container"),t=document.createElement("p");t.innerHTML=e,r.appendChild(t)},5e3)}function identificador(){let e,r;e=prompt("Ingrese su numero"),"string"==typeof e&&0!==e.length?e>0?alert("tu numero es positivo"):alert("tu numero es negativo"):(alert("NO HAS INGRESADO NINGUN NUMERO"),r=confirm("Deseas repetir el identificador"),1==r&&identificador())}function taximetro(){let e,r,t;r=prompt("Ingrese la distancia recorrida en klm"),"string"==typeof r&&0!==r.length?(e=.25*r+.55,alert("El pago total es de "+e+" dolares")):(alert("NO HAS INGRESADO NINGUN VALOR"),t=confirm("Deseas repetir el proceso"),1==t&&taximetro())}function taximetromin(){let e,r,t;r=prompt("Ingrese la distancia recorrida en klm"),"string"==typeof r&&0!==r.length?(e=.25*r+.55,console.log(e),e<1.5?alert("El pago total es de $1,50 dolares"):alert("El pago total es de "+e+" dolares")):(alert("NO HAS INGRESADO NINGUN VALOR"),t=confirm("Deseas repetir el proceso"),1==t&&taximetromin())}function operadores(){let e,r;let t,o,a;r=prompt("Ingrese su edad"),e=r>=18?"Eres mayor de edad":"Eres menor de edad",alert(e),t=prompt("Ingrese su credencial"),o=t??"Ha ingresado como",a="user"===t||"admin"===t?alert("Bienbenido "+o):alert("NO EXISTEN LAS CREDENCIALES")}function bored(){let e,r;e=prompt("Ingrese el digito del sabor de su bebida"),r=e.valueOf(Number),console.log(r),alert("tu sabor es agua")}function fn1(){let e;do{e=prompt("Ingresa tu clave ")}while(3!=e);alert("Clave correcta")}function fn2(e){let r;for(3,r=prompt("Ingresa tu clave ");3==r;){alert("tu clave es correcta");break}}function fn3(){return"Hello world"}function fn4(e){return!1}function calculadora(e){return e>17?"ERES MAYOR DE EDAD":"ERES MENOR DE EDAD"}function calculadora2(){let e=Number(prompt("ingresa el primer termino"));Number(prompt("ingresa el segundo termino"));for(let r=0;r==e;r++)alert(r)}function bored(e,r){return e+r}document.addEventListener("DOMContentLoaded",(function(){}));let sum=function(e,r){return e+r},sumflecha=(e,r)=>e+r,age=(e,r)=>{e=prompt("ingresa tu edad"),alert("Tu ano de nacimiento es "+(2024-e))};function rebored(e){e=prompt("Ingresa tu numero ");let r="";for(let t=1;t<=10;t++)r+=`${e} x ${t} = ${e*t}\n`;return r}let calcusum=(e,r)=>{alert("EL resultado es "+(e+r))},calcurest=(e,r)=>{alert("EL resultado es "+(e-r))},calculadoraaaa=(e,r,t)=>{let o=Number(prompt("ingresa el primer digito")),a=Number(prompt("ingresa el segundo digito"));"sum"===e&&r(o,a),"rest"===e&&t(o,a)},labo=new Object;labo.pc=12,labo.pizarra=1,labo.proyector=1,labo.ventilador=2,labo.luces=11,labo.color="beige",labo.ubicacion="matriz";let estudiante=[{name:"josue",age:13,secondname:"romero"},{name:"antonio",age:19,secondname:"ramon"},{name:"anto",age:17,secondname:"ron"},{name:"anoni",age:35,secondname:"roman"},{name:"federico",age:34,secondname:"ramirez"}];for(let e=0;e<5;e++){let r;switch(e){case 0:r="primer";break;case 1:r="segundo";break;case 2:r="tercer";break;case 3:r="cuarto";break;case 4:r="quinto"}document.getElementById("li"+e).innerHTML+=`El nombre del ${r} estudiante es ${estudiante[e].name} ${estudiante[e].secondname} , tiene  ${estudiante[e].age}  años`}function showposition(e){e.forEach((e,r)=>{alert(`Posición ${r+1}: ${e}`)})}let str=["Hello","world","from","JS"];function calculadora(e){return e.reduce((e,r)=>e+r)}showposition(str);let numbers=[1,2,3,4,5];const result=calculadora(numbers);function calculadora2(e){e.forEach(e=>{alert(3*e)})}alert("La suma de los números es: "+result);let numberss=[1,2,3,4,5];calculadora2(numberss);
//# sourceMappingURL=main.js.map
