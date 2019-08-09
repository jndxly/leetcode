/*
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */
function NumberOf1(n)
{
    // write code here
    let flag = 1, total = 0;
    while(flag && flag != 0){
        if((flag & n ) == flag) total++;
        flag = flag << 1;
    }
    return total;
}

/*
>>>0 意义：
1 . 如果不能转换为Number，那就为0
2 . 如果为非整数，先转换为整数，参考公式sign(n) ⋅ floor(abs(n))
3 . 如果是正数，返回正数，如果是负数，返回负数 + 2的32次方
 */
function NumberOf1(n){
    if(n < 0){
        n = n >>> 0; //无符号右移，忽略符号位，空位都以0补齐  value >>> num     --   num 指定要移位值value 移动的位数。 8 >>> 2 = 2;
    }
    var arr = n.toString(2).split('');
    return arr.reduce(function(a,b){
        return b === "1" ? a + 1 : a;
    },0);
}