/**
 * ababaca
 这里我们要计算一个长度为m的转移函数next。

 next数组的含义就是一个固定字符串的最长前缀和最长后缀相同的长度。

 比如：abcjkdabc，那么这个数组的最长前缀和最长后缀相同必然是abc。
 cbcbc，最长前缀和最长后缀相同是cbc。
 abcbc，最长前缀和最长后缀相同是不存在的。

 **注意最长前缀：是说以第一个字符开始，但是不包含最后一个字符。
 比如aaaa相同的最长前缀和最长后缀是aaa。**
 对于目标字符串ptr，ababaca，长度是7，所以next[0]，next[1]，next[2]，next[3]，next[4]，next[5]，next[6]分别计算的是
 a，ab，aba，abab，ababa，ababac，ababaca的相同的最长前缀和最长后缀的长度。由于a，ab，aba，abab，ababa，ababac，ababaca的相同的
 最长前缀和最长后缀是“”，“”，“a”，“ab”，“aba”，“”，“a”,所以next数组的值是[-1,-1,0,1,2,-1,0]，
 这里-1表示不存在，0表示存在长度为1，2表示存在长度为3。这是为了和代码相对应
 * @type {Array}
 */
var next = [];
next[0] = -1;
function getNext(next, subStr){

    var k = -1;
    for(var len  = 1; len < subStr.length; len++){

        if(subStr[k + 1] == subStr[len]){
            next[len] = k+1;
            k = k+1;
        }
        else{
            while(k > -1 && subStr[len] != subStr[k+1]){
                k = next[k + 1]
            }
            next[len] = k;
        }


    }


}

function kmp(matchStr, subStr){

    getNext(next, subStr);
    var k = -1;

    for(var len = 0; len < matchStr.length; len++){

        while(k > -1 && matchStr[len] != subStr[k +1]){
            k = next[k];
        }
        if(matchStr[len] == subStr[k + 1]){
            k ++;
        }
        if(k == subStr.length -1){
            return len-subStr.length + 1;
        }

    }


}

var matchStr = "bacbababadababacambabacaddababacasdsd";
var ptr = "ababaca";
kmp(matchStr, ptr)