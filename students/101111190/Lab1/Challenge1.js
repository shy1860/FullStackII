const capitalize = (myArray) =>
{
   myArray = myArray.split(" ") ;
   str = "";
   for(const [first, ...rest] of myArray){
   str += first.toUpperCase() + rest.join('') + " ";
   
   }
   
   return str;

}

console.log(capitalize('parisa is a girl'));
//console.log(capotalize('NodeJs'));



