
/**
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。
 * 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */

function getUglyNumber(index){

  if(index < 7){
    return index;
  }
  let res = [];
  res[0] = 1;
  let t2 = 0, t3 = 0, t5 = 0;
  for(let len = 1; len < index; len++){
    res[len] = Math.min(res[t2] * 2, Math.min(res[t3] * 3, res[t5] * 5));
    if(res[t2] * 2 == res[len]) t2++;
    if(res[t3] * 3 == res[len]) t3++;
    if(res[t5] * 5 == res[len]) t5++;

  }
  return res[index - 1]


}
getUglyNumber(7)