function decodeString(str){
    let res = '', multi = 0, multiStack = [],  resStack = []
    // let result = ''
    for(let i = 0; i < str.length; i++){
        const item = str[i]
        if(item === '['){
            multiStack.push(multi)
            resStack.push(res)
            multi = 0
            res = ''
        }
        else if(item === ']'){
            const curMulti = multiStack.pop()
            let pre = resStack.pop()
            let cur = ''
            for(let i = 0; i < curMulti; i++){
                cur += res
            }
            res = pre + cur
        }
        else if(item >= '0' && item <= '9'){
            multi = multi * 10 + parseInt(item)
        }
        else{
            res += item
        }
    }
    console.log(res)
    return res
}

decodeString('3[a2[c]]')