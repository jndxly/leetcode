
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