/*
输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
输出描述:
对应每个测试案例，输出两个数，小的先输出。
 */
function FindNumbersWithSum(array, sum)
{
  // write code here
  if(!array || array.length <= 1) return [];
  let low = 0, high = array.length - 1;
  let result = [], multi = Number.POSITIVE_INFINITY;
  while(low < high){
    let cur = array[low] + array[high];
    if(cur == sum && array[low] * array[high] < multi){
      result = [array[low], array[high]];
      multi = array[low] * array[low];
    }
    else if(cur < sum){
      low++;
    }
    else{
      high--;
    }
  }
  return result;
}