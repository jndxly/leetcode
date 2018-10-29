/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums = nums.sort(function(a, b){
        return a - b;
    });

    let min = Number.POSITIVE_INFINITY, arr = [];

    for(let len = 0; len < nums.length; len++){


        let first = nums[len] ;

        /*和上一个值相等，则肯定计算过，直接跳过*/
        if(len != 0 && first == nums[len - 1]){

            continue;
        }

        for(let start = len + 1, end = nums.length - 1; start < end;){

            let second = nums[start];
            let third = nums[end];
            let sum = first + second + third;

            if(Math.abs(sum - target) < Math.abs( min - target)){
                arr.length = 0;
                arr.push(first, second, third);
                min = sum;
            }
            if(sum == target ){
                return sum;
            }
            else if (sum > target){
                end--;
            }
            else if(sum < target){
                start++
            }


        }

    }
    return min;


};

threeSumClosest([-10,0,-2,3,-8,1,-10,8,-8,6,-7,0,-7,2,2,-5,-8,1,-4,6],18)