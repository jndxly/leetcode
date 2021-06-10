/**
 * 给定一个升序整数数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间如下：
["0->2",”4->5“,"7","13","15->16"]
 */
function convert(arr) {
  let result = [];
  for (let i = 0; i < arr.length; ) {
    let str = "";
    str += arr[i];
    if (arr[i] + 1 === arr[i + 1]) {
      str += "->";
      while (i < arr.length && arr[i] + 1 === arr[i + 1]) {
        i++;
      }
      str += arr[i];
    }
    i++;

    result.push(str);
  }
}
