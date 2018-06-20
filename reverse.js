/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。

 示例 1:

 输入: 123
 输出: 321
 示例 2:

 输入: -123
 输出: -321
 示例 3:

 输入: 120
 输出: 21
 注意:

 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    var num = 0;
    var maxVal = Math.pow(2,31) - 1;
    var minVal = -1 * Math.pow(2,31);
    var isPositive = x > 0;
    while(x ){
        var val = x % 10;

        if(isPositive){
            if(num > 0 && maxVal / 10 < num + val / 10){
                return 0;
            }
            else{
                num = num * 10 + val;
            }
        }
        else if(!isPositive){
            if(num < 0 && minVal / 10 > num + val / 10){
                return 0;
            }
            else{
                num = num * 10 + val;
            }
        }
        x = parseInt(x / 10);
    }

    return num;

};