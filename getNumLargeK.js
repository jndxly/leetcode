/**
 * 给定一个无序数组m，一个数字k，数组无序且元素不限定范围，
 * 要求在o(n)时间，o(1)空间下，找到第一个不存在于数组中的，且大于k的正整数。
 */
/**
 * 目标是找比k大的正整数，数组长度是m，那么这个目标的范围肯定是[k+1,k+m+1]，
 * m长的数据刚好可以用来记录有没有出现，如果出现就置-1，最后遍历一遍，
 * 找到第一个不是负数的位置，如果都是负数，那么K+m+1就是目标值。
 * 举个例子，长度是5的数组 6 -80 8 14 11 19，k是7。那么目标范围肯定是8-13，
 * 数组0下标就是记录有没有8出现，1下标记录9有没有出现，4下标是记录12有没有出现，
 * 方法是遍历数组里的比k大的数，遇到小于k的先置0，比如6和-80的位置都置0，
 * 然后遍历到8把第0的位置置-1，表示出现过，14-7超出数组范围不需要管，
 * 11-7是4把小标4的地方置-1，19-7超出数组范围不管，
 * 遍历一遍后数组的0和4位置都是-1，别的位置都是0，那么从头遍历，第一个不为-1的下标是1，那么目标数就是8+1就是9
 */
function getNum(arr, k) {
  let len = arr.length;
  let start = 1,
    end = len + 1;
  for (let i = 0; i < len; i++) {
    arr[i] = arr[i] - k;
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] < start || arr[i] > end) {
      arr[i] = 0;
    } else {
      arr[arr[i] - 1] = -1;
    }
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] != -1) {
      return i + k + 1;
    }
  }
  return len + k + 1;
}

function getNum2(arr, k) {
  let len = arr.length;
  let start = 1,
    end = len + 1;
  for (let i = 0; i < len; i++) {
    arr[i] = arr[i] - k;
  }
  for (let i = 0; i < len; ) {
    if(arr[i] != arr[arr[i] - 1]){
      let temp = arr[arr[i]-1]
      arr[arr[i]-1] = arr[i]
      arr[i] = temp
      // swap(arr[i], arr[arr[i] - 1])
    }
    else{
      i++
    }
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] != i + 1) {
      return i + k + 1;
    }
  }
  return len + k + 1;
}
var arr = [12, -80, 8, 14, 9, 19]
let k = 7
console.log(getNum(arr, k))

function getNum1(arr, k) {
  let len = arr.length;
  let start = k+1,
    end = len + k+1;
  for (let i = 0; i < len; i++) {
    if (arr[i] < start || arr[i] > end) {
      arr[i] = 0;
    } else {
      arr[arr[i] - k - 1] = -1;
    }
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] != -1) {
      return i + k + 1;
    }
  }
  return len + k + 1;
}
