function PrintMinNumber(numbers)
{
  // write code here
  let arr = numbers.sort(function(a,b){
    let val1 = a + "" + b;
    let val2 = b + "" + a;
    return val1 - val2;
  })
  return arr.join("")
}