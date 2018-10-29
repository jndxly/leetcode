/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

var threeSum = function(nums){
   let newNums = handleRepeat(nums);
   newNums = newNums.sort(function(a, b){
       return a - b;
   });
   let arr = [];
    for(let len = 0; len < newNums.length; len++){
        let first = newNums[len];
        /*如果当前数字已经计算过，则不需要再计算，否则就重复了*/
        if(len != 0 && newNums[len] == newNums[len - 1] ){
            continue;
        }

        for(let start = len+1, end = newNums.length -1; start < end ; ){

            /*如果之前已经计算过了，则不需要再计算，否则就重复了*/
            if(start != len + 1 && end != newNums.length - 1 && newNums[start] == newNums[start -1] && newNums[end] == newNums[end + 1]){
                start++;
                end--;
                continue
            }

            let sum = first + newNums[start] + newNums[end] ;
            if(sum == 0){

                arr.push([first, newNums[start], newNums[end]]);
                start++;
                end--;
            }
            else if(sum > 0){
                end --;
            }
            else{
                start++;
            }
        }


    }

    return arr;


}

/*去掉重复的，对于0最多保存3个，其他的最多保存2个*/
function handleRepeat(nums){
    let newArr = [];
    var map = new Map();
    for(let len = 0; len < nums.length; len++){
        let val = nums[len];
        if(map.has(val) && map.get(val) < 3){
            if(val === 0 ){
                map.set(val, map.get(val) + 1)
                newArr.push(val);
            }
            else if(map.get(val) < 2){
                map.set(val, 2)
                newArr.push(val);
            }
            else{
                // nums.splice(len, 1)
                // len--;
            }

        }
        else if(!map.has(val)){
            map.set(val, 1)
            newArr.push(val);
        }
        else{
            // nums.splice(len, 1)
            // len--;
        }
    }
    return newArr;

}

threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);
