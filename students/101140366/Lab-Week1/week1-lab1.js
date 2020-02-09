// Exercise 1
function capitalize(input){
    // Array to store splitted words
    let words = [];
    // Split input and store into array
    words = input.split(' ');
    
    for(let i = 0;i < words.length;i++){
        // Split each word into two parts: The first capital letter and the rest
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ")
}

console.log(capitalize('the quick brown fox'));


// Exercise 2
function largestOfThree(numbers){
    let largest = numbers[0]
    for(let i = 1;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest = numbers[i]
        }
    }
    return largest;
}
console.log(largestOfThree([1,0,1]))
console.log(largestOfThree([10003,-1007,4]))

// Exercise 3
function lastThreeChars(str){
    let output;
    charsToSwap = str.substring(str.length-3,str.length);
    beginningStr = str.split(str[str.length-3]);
    output = charsToSwap + beginningStr[0];
    return output;
}
console.log(lastThreeChars('Python'));
console.log(lastThreeChars('JavaScript'));

// Exercise 4
function typeOfAngle(degree){
    let output
    if(degree>=0 && degree<90){
        output = "Acute angle";
    }
    if(degree===90){
        output = "Right angle";
    }
    if(degree>90 && degree < 180){
        output = "Obtuse angle";
    }
    if(degree===180){
        output = "Straight angle";
    }
    return output;
}
console.log(typeOfAngle(47))

// Exercise 5
function largestSum(numbers,k){
    let output
    let sum = [];
    let limit = numbers.length - k;
    for(let i = 0;  i <=  limit;  i++){
        // Group k numbers and store them in a sub-array
        sum[i] = numbers.slice(i,k+i);
        // Using reduce to calculate the sum of k given number
        sum[i] = sum[i].reduce((a,b) => a+b)
    }
    // Using spread operator to find the maximum number in the array
    output = Math.max(...sum);
    return output
}
console.log(largestSum([1, 2, 3, 14, 5], 3))


// Exercise 5 - 2nd way
function largestSum2(numbers,k){
    let highest;
    for(let i = 0;  i <=  numbers.length - k;  i++){
        let sum = 0;
        highest = numbers[0];
        for(let j = i;j < i+k; j++){
            sum += numbers[j];
        }
        if(highest < sum){
            highest = sum
        }
    }
    return highest
}
console.log(largestSum2([1, 2, 3, 14, 5], 3))



