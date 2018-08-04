/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。

 示例 1:

 输入: ["flower","flow","flight"]
 输出: "fl"
 示例 2:

 输入: ["dog","racecar","car"]
 输出: ""
 解释: 输入不存在公共前缀。
 * @param strs
 * @returns {string}
 */
var longestCommonPrefix = function(strs) {

    var commonPrefix = "";
    var num = strs.length;
    if(num && num > 0){
        var firstStr =  strs[0];

        for(var len = 0; len < firstStr.length; len++){
            var curStr = firstStr.charAt(len);
            var same = true;
            for(var index =1; index < num; index++){
                if(strs[index].charAt(len) != curStr){
                    same = false;
                    break;
                }
            }
            if(same){
                commonPrefix += curStr;
            }
            else{
                break;
            }
        }
    }
    return commonPrefix;

};