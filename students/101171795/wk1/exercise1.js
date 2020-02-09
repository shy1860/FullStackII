function capital_letter(str)
{
    // Split string 
    str = str.split(" ")

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");

}
console.log(capital_letter("the quick brown fox node"));


function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));

function right_three(str) {
    if (str.length > 1)
      {
        return str.slice(-3) + str.slice(0, -3);
      }
 return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));

function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle.";
    }
    if(angle === 90) {
      return "Right angle.";
    }
    if(angle < 180) {
      return "Obtuse angle.";
    }
    return "Straight angle.";
  }
  
  console.log(angle_Type(47))
  console.log(angle_Type(90))
  console.log(angle_Type(145))
  console.log(angle_Type(180))

  function array_max_consecutive_sum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
      temp_sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) {
        result = temp_sum;
      }
      temp_sum -= nums[i - k + 1];
      
    }
    return result;
  }
  
  console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
  console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
  console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))
  

