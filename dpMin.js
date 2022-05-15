/**
 * 给定一个字符串str，如果可以在str的任意位置添加字符，请返回在添加字符最少的情况下，让str整体都是回文字符串的一种结果。
 * 示例1
输入
ABA
输出
ABA
示例2
输入
AB
输出
ABA
 */

function getDp(str){
    const len = str.length
    let dp = []
    for(let i = 0; i < len; i++){
        dp[i] = new Array(len).fill(0)
    }
    for(let j = 1; j < len; j++){
        if(str[j - 1] !== str[j]){
            dp[j-1][j] = 1
        }
        else{
            dp[j-1][j] = 0
        }
        for(let i = j - 2; i > -1; i--){
            if(str[i] === str[j]){
                dp[i][j] = dp[i+1][j-1]
            }
            else{
                dp[i][j] = Math.min(dp[i+1][j], dp[i][j-1]) + 1
            }
        }
    }
    return dp
}

function getMin(str){
    if(!str || str.length < 2) return str
    const dp = getDp(str)
    let i = 0, j = str.length - 1
    const res = new Array(str.length + dp[0][str.length - 1])
    let left = 0, right = res.length - 1
    while(i <= j){
        if(str[i] === str[j]){
            res[left++] = str[i++]
            res[right--] = str[j--]
        }
        else if(dp[i][j-1] < dp[i+1][j]){
            res[left++] = str[j]
            res[right--] = str[j--]
        }
        else{
            res[left++] = str[i]
            res[right--] = str[i++]
        }
    }
    return res.join('')
}

const str = getMin('aba')
console.log(str)