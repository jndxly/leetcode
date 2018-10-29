/*
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let left = 0,right = 0;
  let arr = [], pre = "";
  print(left, right, n, arr, pre);

  return arr;


};

function print(left, right, n, arr, pre){

  if(left == right) {

    if (left < n) {
      print(left + 1, right, n, arr, pre + "(")
    }
    else if (left == n) {
      arr.push(pre);
      return;
    }
  }
  else if(left > right){

      if(left < n){
        print(left + 1, right, n, arr, pre + "(")
      }
      print(left, right + 1, n, arr,  pre + ")")
  }





}

generateParenthesis(3)