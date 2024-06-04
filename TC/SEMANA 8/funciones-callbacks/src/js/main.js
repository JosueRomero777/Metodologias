"use strict";




let calcusum = (a, b) =>  {
 
let result =  a + b
  alert('EL resultado es ' + result)

};


let calcurest = (a, b) => {
  
  let result =  a - b
  alert('EL resultado es ' + result)

};



let calculadora = (op, fnsum, fnrest) => {

  let a = Number(prompt('ingresa el primer digito'));
  let b = Number(prompt('ingresa el segundo digito'));

if (op === 'sum') {
  fnsum(a, b)

} 

if (op === 'rest') {
  fnrest(a, b)

} 

}


calculadora("sum", calcusum, calcurest)


