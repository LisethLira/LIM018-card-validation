import validator from './validator.js';

//console.log(validator);

//Obteniendo número de tarjeta del input
//let creditCardNumber = document.getElementById("creditCardNumber").value;

//Advertencia de casilla vacia
//var warning1= document.getElementById("warning1");

//function warning1(){
  //  warning1.style.display="block";
//}


function modify(){
    let creditCardNumber = document.getElementById("creditCardNumber");
    let actionModify= validator.maskify(creditCardNumber.value);
    creditCardNumber.value= actionModify;

}

let btnValidator = document.getElementById("btnValidator");
    btnValidator.addEventListener('click',()=>{
        //variable número de tarjeta (input)
        let creditCardNumber = document.getElementById("creditCardNumber").value;
        //Advertencia de casilla vacia
        let warning1= document.getElementById("warning1");
        //let valid= document.getElementById("valid");
        //let noValid=document.getElementById("noValid");
        let validation= validator.isValid(creditCardNumber);
        if (creditCardNumber.trim().length==0){
            warning1.style.display="block";
        }
        else{
            if(validation==true){
                //valid.style.display="block";
                //noValid.style.display="none";
            }
            else{
                //noValid.style.display="block";
                //valid.style.display="none";
            }

        }

        modify();
        
    });


let cardForm = document.getElementById("cardForm");

function reset(){
    cardForm.reset();
    let warning1= document.getElementById("warning1");
    warning1.style.display="none";
    //valid.style.display="none";
    //noValid.style.display="none";
}

let btnReset = document.getElementById("btnReset");
    btnReset.addEventListener('click', reset);