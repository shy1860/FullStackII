//Ex 1
var FirstLetter = (input) => {
    let output = "";
    for (word of input.split(" ")) {
        output += word[0].toUpperCase() + word.slice(1) + " ";
    }
    return output.trim();
}

console.log(FirstLetter("the quick brown fox"));
console.log();

//Ex 2
var max = (a, b, c) => {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));
console.log();

//Ex 3
var right = (input) => {
    if (input.length < 3) {
        return input;
    }
    let pos = input.length - 3;
    return input.slice(pos) + input.slice(0, pos);
}

var right = (input) => {
    return (input.length < 3) ? input : input.slice(input.length - 3) + input.slice(0, input.length - 3);
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
console.log();

//Ex 4
var angle_Type = (angle) => {
    if (angle == 90) {
        return "Right angle";
    }
    if (angle == 180) {
        return "Straight angle";
    }
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    }
    if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    }
}

var angle_Type = (a) => {
    return a == 180 ? "Straight angle" : (a == 90 ? "Right angle" : (a > 0 && a < 90 ? "Acute" : (a > 90 && a < 180 ? "Obtuse angle" : "")));
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
console.log();

//Ex 5
var array_max_sum = (arr, digit) => {
    var max = 0;
    for (let i = 0; i < arr.length + 1 - digit; i++) {
        let temp = 0;
        for (let pos = i; pos < i + digit; pos++) {
            temp += arr[pos];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
} 

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
