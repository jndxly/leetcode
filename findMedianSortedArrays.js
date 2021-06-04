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

findKmin([1,3,14,5,],[2,4,6],3)
/*
获取arr1和arr2中第k小的数
* */
function findKmin(arr1, arr2, k){

    let  len1 = arr1.length;
    let len2 = arr2.length;
    let bound1 = len1 > k? k:len1;
    let bound2 = len2 > k? k:len2;
    let mid = k - 1;
    let left1,right1,left2,right2;
    let left = 0;
    let right = bound1;
    let mid1, mid2;
    while(left < right){
        mid1 = Math.floor((left + right)/2);
        mid2 = mid - mid1;
        left1 = mid1 == 0?Number.NEGATIVE_INFINITY:arr1[mid1 - 1];
        right1 = mid1 == bound1?Number.POSITIVE_INFINITY:arr1[mid1];
        left2 = mid2 == 0?Number.NEGATIVE_INFINITY:arr2[mid2 - 1];
        right2 = mid2 == bound2?Number.POSITIVE_INFINITY:arr2[mid2];
        if(left1 > right2){
            right = mid - 1;
        }
        else if(left2 > right1){
            left = mid + 1;
        }
        else{
            break;
        }

    }


    return Math.min(right1, right2)
}

function findMideaNum(arr1, arr2){

    if(arr1.length > arr2.length){
        return findMideaNum(arr2, arr1)
    }
    let len1 = arr1.length,len2 = arr2.length;
    let left = 0, right = 2*len1;
    let left1,right1, left2, right2;
    let mid = len1+len2, mid1, mid2;
    while(left < right){
        mid1 = Math.floor((left + right) / 2);
        mid2 = mid - mid1;
        left1 = mid1 == 0? Number.NEGATIVE_INFINITY:arr1[Math.floor((mid1-1) / 2)];
        right1 = mid1 == 2*len1?Number.POSITIVE_INFINITY:arr2[Math.floor(mid1 / 2)];
        left2 = mid2 == 0?Number.NEGATIVE_INFINITY:arr2[Math.floor((mid2 - 1)/2)];
        right2 = mid2 == 2 * len2?Number.POSITIVE_INFINITY:arr2[Math.floor(mid2/2)];
        if(left1 > right2){
            right = mid1 - 1;
        }
        else if(left2 > right1){
            left = mid1 + 1;
        }
        else{
            break;
        }

    }
    return (Math.max(left1, left2) + Math.min(right1, right2))/2


}

function findMedian1(arr1, arr2){
    if(!arr1.length || !arr2.length) return
    if(arr1.length > arr2.length){
      return findMedian(arr2, arr1)
    }
  
    let len1 = arr1.length, len2 = arr2.length, mid = Math.floor((len1 + len2 + 1)/2)
    let left = 0, right = len1, mid1, mid2;
    while(left < right){
  
      const mid1 = Math.floor((right - left)/2)
      const mid2 = mid - mid1
      if(arr1[mid1] < arr2[mid2-1]){
        left = mid1 + 1
      }
      else{
        right = mid1
      }
  
    }
    const c1 = Math.max(mid1 === 0? Number.NEGATIVE_INFINITY:arr1[mid-1], mid2 === 0?Number.NEGATIVE_INFINITY:arr2[mid2-1])
    if((len1 + len2)%2 === 1) return c1
    const c2 = Math.min(mid1 === len1?Number.POSITIVE_INFINITY:arr1[mid1], mid2 === len2? Number.POSITIVE_INFINITY:arr2[mid2])
    return (c1+c2)/2
  
  }

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

let result = find([1,2], [3,4,5]);
console.log(result)
function find(arr1, arr2){

    if(arr1.length > arr2.length){
        return find(arr2, arr1);
    }
    let len1 = arr1.length, len2 = arr2.length, mid = len1 + len2;
    let left = 0, right = 2*len1;
    let left1, left2, right1,right2;

    while(left <= right){

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
function getSort(arr1, arr2){
    if(arr1.length > arr2.length){
        return getSort(arr2, arr1)
    }
    let len1 = arr1.length, len2 = arr2.length, left = 0, right = len1;
    // median1：前一部分的最大值
    // median2：后一部分的最小值
    let median1 = 0, median2 = 0;
    while(left <= right){
        // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
        // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]
        let i = Math.floor((left + right)/2);
        let j = Math.floor((len1 + len2 + 1)/2 - i);
        let left1 = i === 0?Number.NEGATIVE_INFINITY:arr1[i-1];
        let right1 = i === len1?Number.POSITIVE_INFINITY:arr1[i];
        let left2 = j === 0?Number.NEGATIVE_INFINITY:arr2[j-1];
        let  right2 = j === len2? Number.POSITIVE_INFINITY:arr2[j];
        if(left1 > right2){
            right = i - 1;
        }
        else{
            median1 = Math.max(left1, left2)
            median2 = Math.min(right1, right2)
            left  = i+1;
        }
    }
    return (len1 + len2) %  2 ===  0?(median1 + median2)/2:median1;
}

