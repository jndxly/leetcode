/*
给定一个字符串，要求把字符串前面的若干个字符移动到字符串的尾部，如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，
使得原字符串变成字符串“cdefab”。请写一个函数完成此功能，要求对长度为n的字符串操作的时间复杂度为 O(n)，空间复杂度为 O(1)。
 */
LeftRotateString("abcdef".split(""),2)
function LeftRotateString(arr, num){


  reverse(arr, 0, num - 1);
  reverse(arr, num, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  console.log(arr)


}
function reverse(arr, start, end){

  let temp;
  while(start < end){

    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;

  }

}
reverseWords("I am a students.")
function reverseWords(str){

  let arr = str.split(" ");
  for(let len = arr.length - 1; len >= 0; len--){

    console.log(arr[len]);
    console.log(" ")
  }


}

/*
给定两个分别由字母组成的字符串A和字符串B，字符串B的长度比字符串A短。请问，如何最快地判断字符串B中所有字母是否都在字符串A里？
 */
function StringContain(str1, str2){

  let hash = 1;
  for(let len = 0; len < str1.length; len++){
    hash |= (1 << (str1.charCodeAt(len)- 65));
  }
  for(let len = 0; len < str2.length; len++){
    if(hash & ( 1 << (str2.charCodeAt(len) - 65))){

    }
    else{
      return false;
    }
  }

}

/*
输入一个由数字组成的字符串，把它转换成整数并输出。例如：输入字符串"123"，输出整数123。

给定函数原型int StrToInt(const char *str) ，实现字符串转换成整数的功能，不能使用库函数atoi。
 */

function str2Int(str){

  str = str.trim();
  let flag = 1, index = 0, max= Number.POSITIVE_INFINITY;
  if(str.charAt(0) == '-'){
    flag = -1;
    index = 1;
    max = Number.NEGATIVE_INFINITY;
  }

  let num = 0;
  for(let i = index; i < str.length; i++){
    let curVal = parseInt(str.charAt(i));

    if(flag == 1 ){
      if(num + curVal / 10 >= max / 10){
        return max;
      }
      else{
        num = num * 10 + curVal
      }
    }
    else{
      if((num  + curVal / 20) * -1 <= max){
        return max;
      }
      else{
        num = num * 10 + curVal;
      }
    }

  }
  return num * flag;

}

/*
*回文，英文palindrome，指一个顺着读和反过来读都一样的字符串，比如madam、我爱我，这样的短句在智力性、趣味性和艺术性上都颇有特色，
* 中国历史上还有很多有趣的回文诗。

那么，我们的第一个问题就是：判断一个字串是否是回文？
 */
function isPalindrome(str){

  let start = 0;
  let end = str.length - 1;
  while(start < end){

    if(str.charAt(start) == str.charAt(end)){
      start++;
      end--;
    }
    else{
      return false;
    }

  }
  return true;

}

/*
id表示最大回文子串中心的位置，mx则为id+P[id]，也就是最大回文子串的边界。
* p[i] = Math.min(xm - i, p[2*id - i])
* */
LongestPalindrome("google")
function LongestPalindrome(str){

  let s = process(str);
  let mx = 0;
  let id = 0;
  let p=[];
  p[0] = 0;
  for (let i = 1; i < s.length; i++)
  {
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
    while (s[i + p[i]] == s[i - p[i]])
      p[i]++;
    if (i + p[i] > mx){
      mx = i + p[i];
      id = i;
    }
  }


  return Math.max(...p) - 1;



}
function process(str){
  let newStr = "#"
  for(let len = 0; len < str.length; len++){

    newStr += str.charAt(len) + "#"

  }
  return newStr;

}
