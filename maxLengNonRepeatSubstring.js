/*
给定一个字符串，找出不含有重复字符的最长子串的长度。
示例：
给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列 而不是子串。
我的代码（我的输出为什么是1，请问哪里错了，谢谢指教）
*/
var nonRepeatLongestSubstring = function(str){
    var substringList = [];
    var curString = [];

    for(var len = 0; len < str.length; len++){

        var s = str[len];
        var index = curString.indexOf(s);

        if(index == -1){

            curString.push(s);

        }
        else{

            substringList.push(curString);
            var substring = curString.slice(index + 1);
            substring.push(s);
            curString = substring;


        }



    }
    if(curString.length > 0){
        substringList.push(curString);
    }


    return Math.max(...substringList.map(item => item.length));
}