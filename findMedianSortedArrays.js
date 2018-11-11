/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

 示例 1:

 nums1 = [1, 3]
 nums2 = [2]

 中位数是 2.0
 示例 2:

 nums1 = [1, 2]
 nums2 = [3, 4]

 中位数是 (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays =  function(nums1, nums2){
    debugger;
    var len1 = 0, len2 = 0, len = 0;

    var media = Math.floor((nums1.length + nums2.length - 1)/2);
    var odd = (nums1.length + nums2.length) % 2 == 1;

    for(; len1 < nums1.length && len2 < nums2.length; ){
        var num1 = nums1[len1], num2 = nums2[len2];

        if(len == media){
            break;
        }

        if(num1 < num2){
            len1++;
        }
        else{
            len2++;
        }


        len++;
    }

    if(len1 == nums1.length){
        while(len2 < nums2.length){
            if(len == media){
                if(odd){
                    return nums2[len2];
                }
                else{
                    return (nums2[len2] + nums2[len2 +1])/2;
                }
            }
            else{
                len2++;
                len++;
            }
        }
    }
    else if(len2 == nums2.length){
        while(len1 < nums1.length){
            if(len == media){
                if(odd){
                    return nums1[len1];
                }
                else{
                    return (nums1[len1] + nums1[len1 + 1])/2;
                }
            }
            else{
                len1++;
                len++;
            }
        }
    }
    if(len == media){
        return getMediaNum(len1, len2, nums1, nums2, odd)
    }

}

function getMediaNum(len1, len2, nums1, nums2, odd){
    var num1 = nums1[len1];
    var num2 = nums2[len2];
    var temp;
    if(num1 < num2){

        if(odd){
            return num1;
        }

        if(len1 < nums1.length - 1){
            temp = nums1[len1 + 1];
            if(temp < num2){
                num2 = temp;
            }

        }
        return (num1 + num2)/2;

    }
    else{
        if(odd){
            return num2;
        }

        if(len2 < nums2.length - 1){
            temp = nums2[len2 + 1];
            if(temp < num1){
                num1 = temp;
            }

        }
        return (num1 + num2)/2;
    }
}

let result = find([1,2], [3,4]);
console.log(result)
function find(arr1, arr2){

    if(arr1.length > arr2.length){
        return find(arr2, arr1);
    }
    let len1 = arr1.length, len2 = arr2.length, mid = len1 + len2;
    let left = 0, right = 2*len1;
    let left1, left2, right1,right2;

    while(left < right){

        let mid1 = Math.floor((left + right) / 2);
        let mid2 = (mid - mid1);
        left1 = mid1 == 0? Number.NEGATIVE_INFINITY: arr1[Math.floor((mid1 - 1)/2)];
        right1 = mid1 == 2*len1? Number.POSITIVE_INFINITY: arr1[Math.floor(mid1 / 2)];
        left2 = mid2 == 0? Number.NEGATIVE_INFINITY: arr2[Math.floor((mid - mid1 - 1)/2)];
        right2 = mid2 == 2*len2? Number.POSITIVE_INFINITY: arr2[Math.floor((mid - mid1)/2)];

        if(left1 > right2){
            right = mid1 - 1
        }
        else if(left2 > right1){
            left = mid1 + 1;
        }
        else {
            break;
        }

    }
    return (Math.max(left1, left2) + Math.min(right1,right2))/2.0




}
