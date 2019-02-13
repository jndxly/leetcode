/*
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

输入
1,2,3,4,5,6,7,0
输出
7
 */
function InversePairs(data)
{
  // write code here
  if(!data || data.length == 0) return 0;
  let total = 0;
  mergeSort(data, 0, data.length - 1);
  return total % 1000000007;

  function mergeSort(arr, start, end){

    if(start >= end) return arr;
    let middle = Math.floor((end + start) / 2);
    mergeSort(arr,start, middle);
    mergeSort(arr, middle + 1, end);
    return merge(arr, start, middle, end );

  }
  function merge(arr, start, middle, end){
    let newArr = [];

    let end1 = middle + 1, end2 = end+1;
    let start1 = start, start2 = middle+1;
    while(start1 < end1 && start2 < end2){
      if(arr[start1] < arr[start2]){
        newArr.push(arr[start1]);
        start1++;
      }
      else{
        newArr.push(arr[start2]);
        start2++;
        total += end1 - start1;
      }
    }
    while(start1 < end1){
      newArr.push(arr[start1]);
      start1++;

    }
    while(start2 < end2){
      newArr.push(arr[start2]);
      start2++;
    }

    for(let len = 0; len < newArr.length; len++){
      arr[start++] = newArr[len];
    }
  }

}