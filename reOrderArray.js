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

function reOrder(arr){

    let odd = 0,temp, even = 0, newArr = arr.slice(0);
    for(let len = 0; len < arr.length; len++){

        if(arr[len] % 2 == 1){
            temp = arr[odd];
            arr[odd] = arr[len];
            arr[len] = temp;
            odd++;
        }

    }

    for(let len = 0; len < newArr.length; len++){
        if(newArr[len] %2 == 0){
            temp = newArr[even];
            newArr[even] = newArr[len];
            newArr[len] = temp;
            even++;
        }
    }

    let subArr = newArr.slice(0, even);
    let number = arr.length - odd;
    arr.splice(odd, number, ...subArr)
    return arr;
}
reOrder([1,2,3,4,5,6,7,8,9])