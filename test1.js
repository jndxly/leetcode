let pre = "", arr = [];

search("abc", pre,arr)
console.log(arr)

function search(str, pre){

  if(str.length == 1){
    arr.push(pre + str)
  }
  else{

    for(let len = 0; len < str.length; len++){

      search(str.substr(0, len) + str.substr(len + 1), pre + str.charAt(len))

    }

  }

}

/*
全排列的实现方法--字典序
给定{1,2,3}，全排列为3！个，即：

{1,2,3}，{1,3,2}

{2,1,3}，{2,3,1}

{3,1,2}，{3,2,1}
找到排列中最后（最右）一个升序的首位位置i，x = ai
找到排列中第i位右边最后一个比ai 大的位置j，y = aj
交换x，y
把第(i+ 1)位到最后的部分翻转
str是排序的升序
 */
function permutation(str){
  let len, j;
  for(len = str.length - 1; len >=0; len--){
    if(str.charCodeAt(len) < str.charCodeAt(len + 1))
      break;
  }

  for(let j = str.length - 1; j > len ; j--){
    if(str.charCodeAt(j) > str.charCodeAt(len)){
      break;
    }
  }

  swap(len,j)
  reverse(str, len+1)

}

let newArr = [];
printStr("abc", "", newArr, 0 );
console.log(newArr)
// ab  aa ab ba bb
function printStr(str, pre, arr, index){

  if(index == str.length - 1){

    for(let len = 0; len < str.length; len++){
      arr.push(pre + str.charAt(len));
    }


  }
  else{
    for(let len = 0; len < str.length; len++){

      printStr(str, pre + str.charAt(len), arr, index + 1)

    }
  }




}

//如果输入abc，它的组合有a、b、c、ab、ac、bc、abc。
var combineStr = "abcd", combindArr = []
printCombind(combineStr, combindArr)
function printCombind(str, arr){

  for(let num = 1; num <= str.length; num++){

    getStr(str, num, arr, "")

  }

}

function getStr(str, num, arr, pre){

    if(num == 1){
      for(let len = 0; len < str.length; len++)
        arr.push(pre + str.charAt(len))
    }
    else{

      for(let len = 0; len < str.length - num + 1; len++){

        getStr(str.substr(len + 1), num - 1, arr, pre +  str.charAt(len))

      }


    }


}

/*
输入一个数组和一个数字，在数组中查找两个数，使得它们的和正好是输入的那个数字。
要求时间复杂度是O(N)。如果有多对数字的和等于输入的数字，输出任意一对即可。

例如输入数组1、2、4、7、11、15和数字15。由于4+11=15，因此输出4和11。
 */
/*解法一*/
function checkSum(arr, flagArr, sum){
  let total = 0;
  for(let len = 0; len < arr.length; len++){
    if(flagArr[len] == 1){
      total += arr[len]
    }
  }
  if(total == sum){
    return true;
  }
  return false;

}
function getSum(arr, k, sum){

  if(k > arr.length) return [];
  let len = arr.length;
  let flagArr = [], resultArr = [];
  for(let i = 0; i < arr.length; i++){

    flagArr[i] = i < k? 1:0;

  }

  if(checkSum(arr, flagArr, sum)){
    resultArr.push(flagArr.slice())
  }

  let isEnd = false;
  while(!isEnd){

    let left = 0;
    for(let j = 0; j < len-1; j++){

      if(arr[j] == 1 && arr[j + 1] == 0){

        for(let k = 0; k < j; k++){
          flagArr[k] == k < left ? 1 : 0;
        }
        flagArr[j] == 0;
        flagArr[j + 1] = 1;

        checkSum(arr, flagArr, sum);

        if(arr.slice(-k) == 0){
          isEnd = true;
        }
        break;

      }

      arr[j] == 1 && left++;

    }

  }
}

/*01背包问题，递归求数组中所有和为sum的可能组合*/
let sumArr = []
getSum([1,2,3], 3, 3, sumArr)
function getSum(arr, n, sum, resultArr){

  if(n < 0 ){
    return;
  }

  if(sum == 0){
    for(let len = 0; len < resultArr.length; len++){
      console.log(arr[resultArr[len]]);
    }
  }

  if(n - 1 >= 0){
    resultArr.push(n - 1);
    getSum(arr, n - 1, sum - arr[n - 1], resultArr);
    resultArr.pop();
    getSum(arr, n - 1, sum, resultArr)
  }



}

/*
1、在二元树中找出和为某一值的所有路径 输入一个整数和一棵二元树，从树的根结点开始往下访问一直到叶结点所经过的所有结点形成一条路径，然后打印出和与输入整数相等的所有路径。 例如输入整数22和如下二元树

10
/ \
5 12
/ \
4 7
则打印出两条路径：10, 12和10, 5, 7。 其中，二元树节点的数据结构定义为：
struct BinaryTreeNode // a node in the binary tree
{
    int m_nValue; // value of node
    BinaryTreeNode *m_pLeft; // left child of node
    BinaryTreeNode *m_pRight; // right child of node
};
 */

function traverse(node, sum, arr){

  let val = node.val;
  arr.push(val);
  sum = sum - val;
  if(node.left == null && node.right == null){
    if(sum == 0){
      console.log(arr);

    }

  }
  else{

    if(node.left){
      traverse(node.left, sum, arr)
    }
    if(node.right){
      traverse(node.right, sum ,arr)
    }

  }
  arr.pop();

}

/**
 * 输入一个整形数组，数组里有正数也有负数。数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。 求所有子数组的和的最大值，要求时间复杂度为O(n)。
 例如输入的数组为1, -2, 3, 10, -4, 7, 2, -5，和最大的子数组为3, 10, -4, 7, 2， 因此输出为该子数组的和18
 */
/*
事实上，当我们令currSum为当前最大子数组的和，maxSum为最后要返回的最大子数组的和，当我们往后扫描时，
对第j+1个元素有两种选择：要么放入前面找到的子数组，要么做为新子数组的第一个元素；
如果currSum加上当前元素a[j]后不小于a[j]，则令currSum加上a[j]，否则currSum重新赋值，置为下一个元素，即currSum = a[j]。
同时，当currSum > maxSum，则更新maxSum = currSum，否则保持原值，不更新。
即

currSum = max(a[j], currSum + a[j])
maxSum = max(maxSum, currSum)
 */
getBigArr([1, -2, 3, 10, -4, 7, 2, -5])
function getBigArr(arr){
  let sum;
  let bigSum = sum = arr[0];

  let resultArr = [arr[0]], targetArr = [arr[0]];

  for(let len = 0; len < arr.length; len++){

    let val = arr[len];
    if(sum + val < val){
      sum = val;
      resultArr = [];
      resultArr.push(val);
    }
    else{
      sum += val;
      resultArr.push(val)
    }

    if(sum > bigSum){
      bigSum = sum;
      targetArr = resultArr;
    }


  }
  return resultArr;

}

/*获取最大乘积*/
function getBigTimes(arr){

  let targetArr = [], resultArr = [];

  let times = {
    ori:arr[0],
    abs:Math.abs(arr[0])
  };
  let large = arr[0];

  for(let len = 1; len < arr.length; len++){

    let val = arr[0];
    if(Math.abs(val * times.abs) > Math.abs(val)){
      times.abs = Math.abs(val * times.abs);
      times.ori = val * times.ori;
      targetArr.push(val);
    }
    else {
      times.abs = Math.abs(val);
      times.ori = val;
      targetArr = [];
      targetArr.push(val)
    }

    if(times.ori > large){
      large = times.ori;
      resultArr = targetArr.slice();
    }

  }

}


let dimes = [1,2,5,10];
let coinArr = [];
coinArr[0] = 1;

let coinResult = coinExchange(7, 4)
console.log(coinResult)
5 2
5 1 1
2 2 2 1
2 2 1 1 1
2 1 1 1 1 1
1 1 1 1 1 1 1


// function coinExchange(n, m){
//
//   if(n == 0){
//     return 1;
//   }
//
//   if(n < 0 || m == 0){
//     return 0;
//   }
//
//   return coinExchange(n, m - 1) + coinExchange(n - dimes[ m - 1], m)
//
// }

function coinExchange(num){
  for(let len = 1; len <= num; len++){
    coinArr[len] = 0;
  }

  let i, j;
  for(i = 0; i < 4; i++ ){

    for(j = dimes[i]; j<= num; j++){

      coinArr[j]+= coinArr[j - dimes[i]];

    }

  }
  return coinArr[num]

}

