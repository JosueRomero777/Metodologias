"use strict";function home(){let e,t,r,o;e=prompt("Ingrese su nombre"),t=prompt("Ingrese su edad"),r=prompt("Ingrese su altura"),o=prompt("Ingrese su cumpleaños");const n=new Object;n.nombre=e,n.edad=t,n.altura=r,n.cumple=o,setTimeout(()=>{console.log(n)},1e4),setTimeout(()=>{const t=document.querySelector(".container"),r=document.createElement("p");r.innerHTML=e,t.appendChild(r)},5e3)}function identificador(){let e,t;e=prompt("Ingrese su numero"),"string"==typeof e&&0!==e.length?e>0?alert("tu numero es positivo"):alert("tu numero es negativo"):(alert("NO HAS INGRESADO NINGUN NUMERO"),t=confirm("Deseas repetir el identificador"),1==t&&identificador())}function identificard(){let e;let t;e=prompt("Ingrese el pin de su tarjeta"),"string"==typeof e&&0!==e.length?4===e.length&&"2005"===e?alert("tu pin es correcto"):alert("tu pin es incorrecto"):(alert("NO HAS INGRESADO NINGUN PIN"),t=confirm("Deseas repetir el proceso"),1==t&&identificard())}function taximetro(){let e,t,r;t=prompt("Ingrese la distancia recorrida en klm"),"string"==typeof t&&0!==t.length?(e=.25*t+.55,alert("El pago total es de "+e+" dolares")):(alert("NO HAS INGRESADO NINGUN VALOR"),r=confirm("Deseas repetir el proceso"),1==r&&taximetro())}function taximetromin(){let e,t,r;t=prompt("Ingrese la distancia recorrida en klm"),"string"==typeof t&&0!==t.length?(e=.25*t+.55,console.log(e),e<1.5?alert("El pago total es de $1,50 dolares"):alert("El pago total es de "+e+" dolares")):(alert("NO HAS INGRESADO NINGUN VALOR"),r=confirm("Deseas repetir el proceso"),1==r&&taximetromin())}document.addEventListener("DOMContentLoaded",(function(){taximetromin()}));
//# sourceMappingURL=main.js.map
