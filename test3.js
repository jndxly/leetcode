
function findK(arr1, arr2, k){

    if(arr1.length > arr2.length){
        return findK(arr2, arr1,k);
    }

    let len1 = arr1.length;
    let len2 = arr2.length;

    let left = 0, right = len1 ;
    let left1, right1, left2, right2;
    let mid = k;
    while(left <= right){

        let mid1 = Math.floor((left + right) / 2);
        let mid2 = mid - mid1;

        left1 = mid1 == 0? Number.NEGATIVE_INFINITY : arr1[ mid1 - 1];
        right1 = mid1 ==  len1? Number.POSITIVE_INFINITY: arr1[mid1 ];

        left2 = mid2 == 0 ? Number.NEGATIVE_INFINITY : arr2[mid2 - 1];
        right2 = mid2 == len2? Number.POSITIVE_INFINITY : arr2[mid2];

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
    return Math.max(left1, left2)

}
findK([1,2,5], [3,4], 3)

function findMedia(arr1, arr2){

    if(arr1.length > arr2.length){
        return findMedia(arr2, arr1)
    }
    let len1 = arr1.length, len2 = arr2.length;
    let left = 0, right = 2*len1, left1, left2, right1,right2;
    while(left <= right){

        let mid = len1 + len2, mid1 = Math.floor((left + right) / 2), mid2 = mid - mid1;
        left1 = mid1 == 0? Number.NEGATIVE_INFINITY:arr1[Math.floor((mid1 - 1)/2)];
        right1 = mid1 == len1 * 2? Number.POSITIVE_INFINITY:arr1[Math.floor(mid /2)];

        left2 = mid2 == 0?Number.NEGATIVE_INFINITY:arr2[Math.floor((mid2 - 1) / 2)];
        right2 = mid2 == 2 * len2?Number.POSITIVE_INFINITY:arr2[Math.floor(mid2 / 2)];

        if(left1 > right2){
            right = mid1 - 1
        }
        else if(left2 > right1){
            left = mid1 + 1;
        }
        else{
            break
        }



    }
    return Math.floor(Math.max(left1 , left2) + Math.min(right1, right2))/2

}

function gen(n){

    let arr = [];
    print(0, 0, n, arr, "")

}
function print(left, right, n, arr, pre){

    if(left == right){

        if(left < n){
            print(left + 1, right, n, arr, pre + "(")
        }
        else{
            arr.push(pre)
        }

    }
    else{

        if(left < n){
            print(left + 1, right, n, arr, pre + "(")
        }
        print(left, right + 1, n, arr, pre + ")")

    }

}