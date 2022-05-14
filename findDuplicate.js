/**
 * 当然这里可能有人要发问，如果数组中的数字比数组的长度还大呢，刚好原题给出了限制

其中1 ≤ a[i] ≤ n （n为数组长度）



那么我们便是判断nums[i]与nums[nums[i]-1]是否相等，如若不相等的话我们就将nums[nums[i]-1]放到nums[i]的位置上

即while(i<nums.length){交换nums数组中的位置}，如果有元素出现重复，那么便有一个不是放在nums[i]的位置上，例如[1,2,2,3]，那么便有一个2不是存在nums[1]的位置上，我们只需要判断这个便可以知道重复的数组了
 */
/**

给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。【编程】
找到所有出现两次的元素。你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？(限时5分钟} arr 
 * @returns 
 */
function getNum(arr){

    if(!arr || !arr.length) return 
    for(let i = 0; i < arr.length; ){
        if(arr[i] !== arr[arr[i] - 1]){
            const temp = arr[arr[i] - 1]
            arr[arr[i] - 1] = arr[i]
            arr[i] = temp
        }
        else {
            ++i
        }
    }
    const result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== i+1 ){
            result.push(arr[i])
        }
    }
    return result
}