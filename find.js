/*
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
/* 思路
* 矩阵是有序的，从左下角来看，向上数字递减，向右数字递增，
* 因此从左下角开始查找，当要查找数字比左下角数字大时。右移
* 要查找数字比左下角数字小时，上移
*/
function find(arr, target){

    if(arr && arr.length > 0 && arr[0].length > 0){
        let row = arr.length, column = arr[0].length;

        for(let i = row - 1, j = 0; i >= 0 && j< column; ){
            let cur = arr[i][j];
            if(cur == target){
                return true;
            }
            else if(cur > target){
                i--;
            }
            else{
                j++;
            }
        }

    }
    return false;

}