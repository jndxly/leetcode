var arr = [["1","2"],["3","4","5"]]
const result1 = transArray(arr)
console.log(result1)
/**
 * 数组全排列
var arr = [["1","2"],["3","4","5"]];
预期结果
[["1","3"],["1","4"],["1","5"],["2","3"],["2","4"],["2","5"]]

 * @param {*} arr 
 * @returns 
 */
function transArray(arr){
    if(!arr || arr.length < 2) return arr
    let result = ['']
    for(let i = 0; i < arr.length; i++){
       result = getNewArray(result, arr[i])
    }
    return result.map(item=>{
        return item.split(',')
    })
}
function getNewArray(arr1, arr2){
    const result = []
    for(let i = 0; i < arr1.length; i++){
        const str = arr1[i]
        for(let j = 0; j < arr2.length; j++){
            let temp = str.length > 0? str + ',' : str
           result.push(temp + arr2[j])
        }
    }
    return result
}