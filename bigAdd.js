/**
 * 不用加减乘除，就 n*7
 */

 function bigAdd(a, b){
     while(a){

        [a,b] = [(a & b) << 1, a^b]

     }
     return b
 }

 // n + n + ...n
 function multi_7(n){

    for(let i = 0; i < 7; i++){
        n = bigAdd(n, 0)
    }
    return n;

 }

 /**
  * 
  * @param {*} n  n*8 - n
  */
 function multi_7(n){
     return n << 3 + bigAdd(~n, 1)
 }