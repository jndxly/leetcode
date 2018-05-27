/*
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    if(nums && nums.length && nums.length > 0){
        for(var len = 0; len < nums.length; len++){

            var item = nums[len];
            var minusVal = target - item;
            var index = nums.indexOf(minusVal);
            if(index != -1 && index != len){
                return [len, index];
            }



        }

    }

    else{
        return [];
    }




};