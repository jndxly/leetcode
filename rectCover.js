/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

比如n=3时，2*3的矩形块有3种覆盖方法：
https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&&tqId=11163&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 */
function rectCover(number)
{
    // write code here
    if(number <= 0) return 0;
    if(number == 1) return 1;
    let numArr = [1, 2];
    for(let i = 2; i <number; i++){
        numArr[i] = numArr[i - 2] + numArr[i-1];
    }
    return numArr[number - 1];
}