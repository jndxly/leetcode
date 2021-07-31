/**
 * 求数组相乘，末尾0的个数
 * 统计2和5的因子个数，取较小值即可：
 */

function getTailZero(arr){

    if(!arr || !arr.length) return 0
    let num2 = 0, num5 = 0;
    for(let i = 0; i < arr.length; i++){

        let item = arr[i];
        num2 += getNum(item, 2)
        num5 += getNum(item, 5)
    }
    return Math.min(num2, num5)

    function getNum(num, i){

        let count = 0
        while(num % i == 0){
            num = num / i;
            count++;
        }
        return count;

    }

}