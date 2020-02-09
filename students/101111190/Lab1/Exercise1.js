
//Exercise1
function gretter(myArray , counter) {
    var greetText = 'Hello ';

    for(var index = 0 ; index <myArray.lenght ; index++)
    {
        console.log(greetText + myArray[index]);
    }
}

const gretter = (myArray) => {
    let greetText = 'Hello ';

    for(const element of myArray)
    {
        console.log('${greetText}' , element);
    }
}

gretter(['Randy Savage' , 'Ric Flair' , 'Hulk Hogan'] , 3);