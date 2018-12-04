/*

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString();
    for(var start = 0, end = str.length - 1; start <= end; start++,end--){
        var s = str.charAt(start);
        var e = str.charAt(end);
        if(s !== e){
            return false;
        }
    }
    return true;
};

/*
define function node(){

    this.val = undefined;
    this.next = null;

}
 */

function check(node){

    let tail, pre = node;
    tail = convert(node,tail);
    while(pre !== tail){
        let preVal = pre.val;
        let tailVal = tail.val;
        if(pre == tailVal){
            continue;
        }
        else{
            return false;
        }
    }
    return true;




}

function convert(node,tail){
    let head = node, pre = null;
    while(node){
        node.pre = pre;
        pre = node;
        node = node.next;
    }
    tail = pre;
    return tail;
}