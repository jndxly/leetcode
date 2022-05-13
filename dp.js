/**
 * 求一个数组最大子项的和，要求这些子项在数组中的位置不是连续的。

这是LeetCode的题目，198.打家劫舍。

[1,2,3,1] 输出4，1 + 3 = 4。[2,7,9,3,1] 输出12，2 + 9 + 1 = 12
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
  
    let dp = new Array(nums.length);
  
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
  
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
  
    return dp[nums.length - 1];
  };
  
  rob([2,7,9,3,1]);