/*给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
    [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]
]/*

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    let newNums = handleRepeat(nums);
    newNums.sort(function(a, b){
        return a - b;
    })
    let arr = [];
    for(let firstNum = 0; firstNum < newNums.length; firstNum++){
        let first = newNums[firstNum];
        if(firstNum != 0 && first == newNums[firstNum - 1] ){
            continue
        }
        for(let secondNum = firstNum + 1; secondNum < newNums.length; secondNum++){

            let second = newNums[secondNum];
            if( secondNum != firstNum + 1 && second == newNums[secondNum - 1] ){
                continue;
            }

            for(let thirdNum = secondNum + 1, fourthNum = newNums.length - 1; thirdNum < fourthNum;){

                let third = newNums[thirdNum];
                let fourth = newNums[fourthNum];
                let sum = first + second + third + fourth;

                if(thirdNum != secondNum + 1 && fourth != newNums.length - 1 && newNums[thirdNum] == newNums[thirdNum -1] && newNums[fourthNum] == newNums[fourthNum + 1]){
                    thirdNum++;
                    fourthNum--;
                    continue
                }

                if(sum == target){
                    arr.push([first, second, third, fourth])
                    thirdNum++;
                    fourthNum--;
                }
                else if(sum < target){
                    thirdNum++;
                }
                else if(sum > target){
                    fourthNum--;
                }


            }


        }
    }
    return arr;


};

let arr = fourSum([-1,0,-5,-2,-2,-4,0,1,-2],-9);
console.log(arr)

function handleRepeat(nums){
    let newNums = [], map = new Map();
    for(let num of nums){
        if(map.get(num)){
            let len = map.get(num);
            if(len < 4){
                map.set(num, len++);
                newNums.push(num);
            }
            else if(len == 4 ){
                if(num == 0){
                    map.set(num, len++)
                    newNums.push(num);
                }
                else{
                    continue
                }
            }
            else if(len > 4){
                continue
            }
        }
        else{
            map.set(num, 1)
            newNums.push(num);
        }
    }
    return newNums;
}