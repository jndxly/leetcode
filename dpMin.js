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

/**
 * 分析：
1）问题关键：如何以个例推整体，再由整体推回个例？
回文字符串问题：显然，当任意 [i… j]字符串为回文字符串时，其中的任意k使得[i+k…j-k] 同样也是回文字符串，这样可以推出结论：先假设字符串str[i…j]已经是回文字符串，那么不论是在前面或者后面再加一个字符，此时我们最多只需要再在另一头再加上这个字符就使整体再次成为字符串。（注：是否存在我单单只加一个字符不改变回文结构的情况，例：最特殊的，原字符串由同一个字符组成，此时再加一个该字符那肯定还是回文。）
2）由此可知，[i…j]最少添加几个字符的问题，我们可以根据几种情况去甩给子串。先分析，
① 当str[i] == str[j]时，问题直接交给[i+1…j-1]，、
② 当str[i] != str[j] ，此时如何分析，？

1.头尾不相等，那么肯定头尾有一端是最终回文字符串的最外层的，是头还是尾我不管，先得出这个结论（因为要添加最少字符，所以让原本在最外层的还是呆在最外层肯定是最优方案之一）。
2.再来分析头尾问题，头尾至少有一个会成为最终字符串的最外层，那么肯定是谁添加的少谁来当那个外面的。那么此时问题就交给了 [i+1 … j] 以及 [i … j-1]这两个子串。这俩哪个子串成为回文串的需求比较小，我就选哪个，然后最外层就相应添加另一头的，(原字符串i…j两头不相等，注定了要分开，必须为其中一个重新分配合适对象，而且这个对象至少有一个是外来的，才能牵手成功！然后另一个暂时没分配的我先扔到子串里头，看看有没有合适的，没有我在按上面的步骤来考虑.)
3.通过dp数组来还原最终回文字符串结果：
首先取值肯定取 dp[0][str.length]，然后逐一分情况讨论，
1）当 str[i] == str[j]时，还原出的回文串应当为：

str[i] + [i+1…j-1]上应该还原出来的回文串 + str[j]也就是str[i]

2）当两者不相等时，此时我们就需要分析，dp[i][j]上的值是从哪得到的，即dp[i+1][j] 和dp[i][j-1]的大小，当前者小时，dp值就从前者+1得到，那么此时，我们的决策是为i位置上的字符分配对象，将j仍进子串中，那么回文串通式为：

str[i] + [i+1....j]这里自己决策回文串 + str[i]
 * @param {*} str 
 * @returns 
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