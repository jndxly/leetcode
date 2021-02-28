/**
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
 * 那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
 * 我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
 */
let arr = [];
function Insert(num)
{
    // write code here
    let i = arr.length - 1;
    for(; i >= 0 && arr[i] > num; i--){
        arr[i + 1] = arr[i];
    }
    arr[i + 1] = num;
}
function GetMedian(){
	// write code here
    let index = Math.ceil(arr.length / 2) - 1
    if(arr.length % 2 == 1){
        return arr[index]
    }
    else return (arr[index] + arr[index + 1])/2;
}