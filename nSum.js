/*
给定一个arr， 从arr 中找出n个数，和为0.
 */

function checkSum(arr, flagArr, sum, resultArrs) {
    let total = 0;
    for(let len = 0; len < arr.length; len++){

        if(flagArr[len] == '1'){
            total += arr[len];
        }

    }
    if(total == sum){
        let targetArr = [];
        for(let len = 0; len < flagArr.length; len++){
            flagArr[len] == '1' &&  targetArr.push(arr[len])
        }
        resultArrs.push(targetArr)

    }
}

function flagArrs(arr, m, n, sum){

    if(n < 1) return [];

    let flagArrs = [];
    let left = 0, isEnd=false;

    for(let i = 0; i < m; i++){
        flagArrs[i] = i < n? "1":"0";
    }
    let resultArrs= [];

    checkSum(arr, flagArrs, sum, resultArrs)


    while(!isEnd){

        left = 0;

        for(let j = 0; j < m -1; j++){

            if(flagArrs[j] == "1" && flagArrs[j+1] == "0"){

                for(let k = 0; k < j; k++){
                    flagArrs[k] = k < left? "1":"0"
                }

                flagArrs[j] = "0";
                flagArrs[j + 1] = "1"

                checkSum(arr, flagArrs, sum, resultArrs)

                if(flagArrs.slice(-n).indexOf("0") == -1){
                    isEnd = true;
                }



                break;

            }
            flagArrs[j] == "1" && left++;

        }
    }
    return resultArrs;


}



let arr = flagArrs([-2, -1, 0, 1, 2],5, 3, 0)
debugger;