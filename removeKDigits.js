/*
删除k个数后，最小值
 */
function removeKDigits(str,k){

    let index = 0;
    for(let len = 0; len < str.length - 1, index < k; len++){

        let first = parseInt(str.charAt(len));
        let second = parseInt(str.charAt(len + 1));

        if(first > second && index < k){
            str = str.substring(0, len) + str.substring(len+1);
            index++;
            len--;
        }

    }
    if(index < k){
        str = str.substring(0, str.length - (k - index))
    }
}
removeK("1593212",3)
function removeK(str, num){

    let arr = [];
    let k = 0, top = 0;
    arr.push(str.charAt(0));
    for(let len = 1; len < str.length; len++){

        if(arr[top] > str.charAt(len) && k < num){
            top--;
            k++;
        }
        top++;
        arr[top] = str.charAt(len);

    }
    while(k < num){
        arr.pop();
        k++;
    }
    return arr.join("")

}