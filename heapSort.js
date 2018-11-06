
function buildHeap(arr){

    for(let index = arr.length /2; index > =0;index--){

        headAdjust(arr, index, arr.length);

    }

}

function headAdjust(arr, index, len){

    let swap = arr[index];

    let child = index * 2 + 1;


    while(child < len){

        if(child + 1 <len && arr[child] < arr[child + 1]){
            child += 1;
        }

        /*调整后，需要对这颗孩子树重新建堆*/
        if(arr[index] < arr[child ]){

            arr[index] = arr[child];
            index = child;
            child = index * 2 + 1;
        }
        else{
            break;
        }
        arr[index] = swap;

    }

}

function heapSort(arr){

    buildHeap(arr);

    for(let index = arr.length - 1; index > 0; index --){

        let swap = arr[index];
        arr[index] = arr[0];
        arr[0] = arr[index];

        /*重新将最大元素放到堆顶*/
        headAdjust(arr, 0, i)

    }

}