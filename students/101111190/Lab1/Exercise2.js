const capotalize = ([first, ...rest]) =>
{
     
   return firstLetter = first.toUpperCase() + rest.join('').toLowerCase();
  

}

console.log(capotalize('foobar'));
console.log(capotalize('NodeJs'));