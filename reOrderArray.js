/*
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */
function reOrderArray(arr)
{
    // write code here
    let index = 0;
    let temp;
    for(let len = 0; len < arr.length; len++){
        if(arr[len] % 2 == 1){
            temp = arr[len];
            for(let i = len - 1; i >= index; i--){
                arr[i + 1] = arr[i];
            }
            arr[index] = temp;
            index++;
        }
    }
    return arr;

}