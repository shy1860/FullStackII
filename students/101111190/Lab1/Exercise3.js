const color = ['red' , 'green' , 'blue']

const capitalize = ([first, ...rest]) =>
{
    
  return firstLetter = first.toUpperCase() + rest.join('').toLowerCase();
  
}

const capitalizeColor = color.map(capitalize);

console.log(capitalizeColor);