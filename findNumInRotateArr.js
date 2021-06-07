/**
 * 按照某个位置旋转的数组（连续且有序）求中位数，例如[7,8,9,1,2,3,4,5,6]，复杂度，如何降到比n更低
 */
function findRotateArr(arr){

    if(!arr.length) return
    let left = 0, right = arr.length - 1, mid
    while(left < right){
        mid = left + ((right - left)>>1)
        if(arr[right] > arr[mid]){
            right = mid
        }
        else if(arr[right] < arr[mid]){
            left = mid + 1
        }
        else{
            right--
        }
    }
    let size = arr.length
    if(size % 2 == 1){
        return arr[(left + Math.floor(size/2))%size]
    }
    else{
        return (arr[(left + Math.floor(size/2))%size] + arr[(left + Math.floor((size - 1)/2)%size)])/2
    }

}