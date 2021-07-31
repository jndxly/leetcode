

/**
 * 给定一个字符串，去除字符'b',以及连续的'a''c'。(需要考虑)例如
"aacbd" -> "ad" "aaabccc" -> ""
 */

function filterStr(str){

    let arr = [];
    for(let i = 0; i < str.length; i++){
        const c = str[i];
        if(c === 'b'){
            continue
        }
        else{
            if((c === 'a' || c === 'c') && arr.length > 0 ){
                const top = arr[arr.length - 1]
                if((top === 'a' || top === 'c' ) && top != c){
                    arr.pop()
                    continue
                }
            }
            arr.push(c)
           
        }
    }
    return arr.join('')


}