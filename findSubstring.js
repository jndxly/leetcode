/*
给定一个字符串 s 和一些长度相同的单词 words。在 s 中找出可以恰好串联 words 中所有单词的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

示例 1:

输入:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出: [0,9]
解释: 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function(s, words) {

  if(words.length == 0 || words[0].length == 0) return [];

  let newWords = words.sort();
  let newSubStr = newWords.join("");

  let strLen = words[0].length;
  let ret = [];

  let subLen = words.length * strLen;

  for(let len =0; len < s.length - subLen + 1; len++){

    let subStr = s.substr(len, subLen);
    let arr = [];
    for(let i = 0; i < subStr.length; ){
      arr.push(subStr.substr(i, strLen));
      i = i + strLen;

    }
    arr.sort()
    let subWords = arr.join("")

    if(subWords == newSubStr){
      ret.push(len);

    }


  }
  return ret;





};
findSubstring("bccbcc", ["bc","cc","cb"])




