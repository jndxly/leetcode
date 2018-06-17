/*

将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：

P   A   H   N
A P L S I I G
Y   I   R
之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"

实现一个将字符串进行指定行数变换的函数:

string convert(string s, int numRows);
示例 1:

输入: s = "PAYPALISHIRING", numRows = 3
输出: "PAHNAPLSIIGYIR"
示例 2:

输入: s = "PAYPALISHIRING", numRows = 4
输出: "PINALSIGYAHRPI"
解释:

P     I    N
A   L S  I G
Y A   H R
P     I
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    var arr = [];

    for(var len = 0; len < numRows; len++){
        arr[len] = [];
        for(var col = 0; col < s.length; col++){
            arr[len][col] = "";
        }
    }



    var colIndex = 0;//
    var row = 0;

    for(var len = 0; len < s.length; len++){
        var str = s.charAt(len);
        //每rowNums一个z循环
        if(colIndex % (numRows - 1) == 0 ){

            arr[row][colIndex] = str;
            row++;
            //是否到达最后一行
            if(row == numRows){
                colIndex++;
                row = numRows - 2;
            }
        }
        else{
            arr[row][colIndex] = str;
            row--;
            colIndex ++;//
            //到达第一行
            if(row == -1){
                //只有一行
                if(numRows > 1){
                    row = 1;
                    colIndex --;
                }
                else{
                    row = 0;
                }


            }
        }

    }
    var newStr = "";

    for(len = 0; len < numRows; len++)
        for(col = 0; col < s.length; col++){
            if(arr[len][col] != ""){
                newStr += arr[len][col];
            }
        }

    return newStr;


};