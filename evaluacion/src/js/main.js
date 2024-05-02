'use strict';

 document.addEventListener('DOMContentLoaded',function(){

  evaluacion();
   
 });

 function evaluacion(){
  // En nuestra tienda, ofrecemos a nuestros clientes la conveniencia de utilizar nuestro estacionamiento por USD 2,00. 
  // Si su compra supera los USD 20,00, el estacionamiento será gratuito. Para calcular el total de su compra, 
  // le pedimos que ingrese el precio unitario del producto y la cantidad que desea adquirir. Mostrar el valor a pagar por el uso del parqueadero.



  let buy;
  let product;
  let result;
  let sms;
  
  const a = "Por el valor total de su compra el parqueadero es gratuito";
  const b = "El valor a pagar por el parqueadero es de USD 2,00";

     
    buy = prompt("Ingrese el precio del prodcuto", );
    product = prompt("Ingrese la cantidad del prodcuto adquirido", );
 
    result = buy * product;

    sms = result > 20  ? a:b;
    
    alert(sms)




}

   
 
