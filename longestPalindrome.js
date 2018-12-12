/*

定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba"也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    var longStr = "", curStr1 = "", curStr2 = "";

    //匹配两种回文。 abcba,  abccba
    for(var len = 0; len < s.length; len++){

        longStr = palindrome(s, len, longStr, "1");
        longStr = palindrome(s, len, longStr, "2");

    }
    return longStr;
}

//匹配第一种
function palindrome(s, len, longStr, mode){

    var str = s.charAt();
    var front = len , end = len , frontStr , endStr, curStr;
    if(mode == "2"){
        end = len + 1;
    }
    while(front >= 0 && end < s.length){
        frontStr = s.charAt(front);
        endStr =  s.charAt(end);
        if(frontStr == endStr){
            front --;
            end++;
        }
        else{
            break;
        }

    }

    if(s.charAt(front) == s.charAt(end)){
        curStr = s.substring(front, end + 1);
    }
    else{
        curStr = s.substring(front + 1, end );
    }
    if(curStr.length > longStr.length){
        longStr = curStr;
    }
    return longStr;


}



var s = "babad";
var p = getLongest(s);
console.log(Math.max(...p) - 1)

/**
 * mx > i，那么P[i] >= MIN(P[2 * id - i], mx - i)
 * @param str 字符串
 * @param mx 最长回文子串的右边界
 * @param id 最长回文子串的中心位置
 * @param p[i]字符串s 位置i的最长回文子串
 * @returns {Array}
 */



getLongest("google")
function getLongest(str){
  var p = [], mx = 0, id = 0;
  let s = process(str);
  p[0] = 0;
  for (let i = 1; i < s.length; i++)
  {
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
    while (s[i + p[i]] == s[i - p[i]])
      p[i]++;
    if (i + p[i] > mx){
      p[i] = mx - i;
      id = i;
    }
  }
  return p;
}

function process(str){

    let newStr = "^#", len = 0;
    while(len < str.length){
        newStr += str.charAt(len) + "#";
        len++;
    }
    return newStr + "$";

}



