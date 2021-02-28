/**
 * 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），
 * 每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * 
 * 又因为x的取值只能为整数，且f(3)>f(2)，所以，当n＞3时，
 * 将n尽可能地分割为3的和时，乘积最大。
 *  当n＞3时，有三种情况，即n%3==0, n%3==1, n%3==2,如下所示
 */

function cutRope(number)
{
    // write code here
    if(number===2) return 1;
    if(number===3) return 2;
    let a=Math.floor(number/3),b=number%3;
    switch(b){
        case 0:return Math.pow(3,a);
        case 1:return Math.pow(3,a-1)*4;
        case 2:return Math.pow(3,a)*2;   
    }
}