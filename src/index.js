import validator from './validator.js';

console.log(validator);

//Obteniendo número de tarjeta del input
var creditCardNumber = document.getElementById("creditCardNumber").value;

//var warning1= document.getElementById("warning1");

//function warning1(){
  //  warning1.style.display="block";
//}


var btnValidator = document.getElementById("btnValidator");
    btnValidator.addEventListener('click',()=>{
        validator.isValid(creditCardNumber);
  
});