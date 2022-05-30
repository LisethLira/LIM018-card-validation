//let creditCardNumber='4083952015263';

const validator = {
  isValid: function (creditCardNumber){
  //Pasar a un array y revertir
    let stringToArray= creditCardNumber.split("").reverse();
    //console.log(stringToArray);
    let arrayCardNumber= [];
    let sumaDigitos=0;
    let sumaArray=0;


    for (let i=0; i<stringToArray.length; i++){
      arrayCardNumber.push(parseInt(stringToArray[i]));
    //console.log(arrayCardNumber);
      if(i%2!=0){
        arrayCardNumber[i]= arrayCardNumber[i]*2;

      }
    }
    //console.log(arrayCardNumber);
    for (let i=0;i<arrayCardNumber.length; i++){
    
      if(arrayCardNumber[i]>9){
        let newArray=[]; 
        newArray=arrayCardNumber[i].toString().split("");
        sumaDigitos=parseInt(newArray[0])+parseInt(newArray[1]);
        arrayCardNumber[i]=sumaDigitos;
      }
    }
    
    for(let i=0;i<arrayCardNumber.length;i++){
      sumaArray= sumaArray+arrayCardNumber[i];
    }
    console.log(arrayCardNumber);
    return sumaArray%10==0;

  }
}; 
console.log(validator.isValid('4083952015263'));
export default validator;
