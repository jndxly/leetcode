
function quickSort(arr){



    if(arr.length <= 1){
        return arr;
    }
    else{

        let left = [], right = [];

        let temp = arr[0];
        for(let len = 1; len < arr.length; len++){

            if(arr[len] < temp){
                left.push(arr[len]);
            }
            else if(arr[len] >= temp){
                right.push(arr[len]);
            }



        }
        return quickSort(left).concat([temp]).concat(quickSort(right))

    }


}

let arr = quickSort([1,3,5,8,0,-1,9])
console.log(arr);

/*利用快排球topk*/
function topk(arr, k, start, end){

    if(arr.length <= 1 || arr.length < k) return ;
    let temp = arr[start];
    let left = [], right = [];
    for(let i = start + 1; i < end; i++){
        if(arr[i] <= temp) left.push(arr[i]);
        else right.push(arr[i])
    }
    if(left.length == k - 1) return temp;
    else if(left.length < k){
        return topk(right, k - left.length - 1, 0, right.length);
    }
    else{
        return topk(left, k, 0, left.length )
    }

}