import validator from './validator.js';

//console.log(validator);

let secondPage = document.getElementById('secondPage');
let firstPage = document.getElementById('firstPage');
secondPage.style.display='none';
firstPage.style.display='block';

let btnNextPage= document.getElementById('btnNextPage');
btnNextPage.addEventListener('click',()=>{
    //alert('boton funcionando');
    secondPage.style.display='flex';
    firstPage.style.display='none';
    let valid= document.getElementById("valid");
    let noValid=document.getElementById("noValid");
    let warningCard= document.getElementById("warningCard");
    let warningName= document.getElementById("warningName");
    let warningEmail= document.getElementById("warningEmail");
 
    warningCard.style.display="none";
    warningName.style.display="none";
    warningEmail.style.display="none";
    valid.style.display="none";
    noValid.style.display="none";

})

let btnBackFirstPage= document.getElementById('btnBackFirstPage');
btnBackFirstPage.addEventListener('click',()=>{
    //alert('boton funcionando');
    secondPage.style.display='none';
    firstPage.style.display='block';

})


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
        let warningCard= document.getElementById("warningCard");
        let warningName= document.getElementById("warningName");
        let warningEmail= document.getElementById("warningEmail");
        let boxName= document.getElementById("boxName").value;
        let boxEmail=document.getElementById("boxEmail").value;
        let valid= document.getElementById("valid");
        let noValid=document.getElementById("noValid");
        let validation= validator.isValid(creditCardNumber);
        if (creditCardNumber.trim().length==0){
            warningCard.style.display="block";
        }
        
        if(boxName.trim().length==0){
            warningName.style.display="block";
        }
        
        if(boxEmail.trim().length==0){
            warningEmail.style.display="block";
        }

        else{
            if(validation==true){
                valid.style.display="block";
                noValid.style.display="none";
                alert("Felicitaciones,completaste tu compra exitosamente");
            }
            else{
                noValid.style.display="block";
                valid.style.display="none";
            }
        }
        

        modify();
        
    });


let cardForm = document.getElementById("cardForm");

function reset(){
    cardForm.reset();
    let valid= document.getElementById("valid");
    let noValid=document.getElementById("noValid");
    let warningCard= document.getElementById("warningCard");
    let warningName= document.getElementById("warningName");
    let warningEmail= document.getElementById("warningEmail");
 
    warningCard.style.display="none";
    warningName.style.display="none";
    warningEmail.style.display="none";
    valid.style.display="none";
    noValid.style.display="none";
}

let btnReset = document.getElementById("btnReset");
    btnReset.addEventListener('click', reset);