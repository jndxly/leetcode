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





};

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
