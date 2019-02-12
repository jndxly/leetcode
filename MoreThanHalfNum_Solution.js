/*
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */
function MoreThanHalfNum_Solution(numbers)
{
  // write code here
  if(!numbers || numbers.length  == 0) return 0;
  let m = new Map();
  for(let len = 0; len < numbers.length; len++){
    let val = numbers[len];
    if(m.has(val)){
      m.set(val, m.get(val) + 1);
    }
    else{
      m.set(val, 1)
    }
    if(m.get(val) > numbers.length / 2){
      return val;
    }
  }
  return 0;
}