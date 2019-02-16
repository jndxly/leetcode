/*
一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字
 */
function FindNumsAppearOnce(array)
{
  // write code here
  // return list, 比如[a,b]，其中ab是出现一次的两个数字
  let hash = 0;
  for(let len = 0; len < array.length; len++){
    hash ^= array[len];
  }
  let num = getFirstBit(hash);
  let hash1 = 0, hash2 = 0;
  for(let len = 0; len < array.length; len++){
    if((num & array[len])){
      hash1 ^= array[len]
    }
    else{
      hash2 ^= array[len]
    }
  }
  return [hash1, hash2];

  function getFirstBit(val){

    let num = 1
    while((val & num) != num){
      num = num << 1;
    }
    return num;

  }
}