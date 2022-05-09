function stackSortFunc(arr:number[], help:number[]):Array<number>{

    if(!arr || arr.length < 2) return arr
    let top = -1
    while(arr.length){
        const temp = arr.pop()
        while(top > 0 && help[top] < temp){
            arr.push(help[top])
            top--
        }
        top++
        help.push(temp)
    }
    while(help.length){
        arr.push(help.pop())
    }
    console.log(arr)
    return arr
}

stackSortFunc([2,1,3,5,8,7], [])